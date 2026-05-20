$p = (Resolve-Path '.\IM Web Portal customization v10 - Updated.mht').Path
$c = [IO.File]::ReadAllText($p)
Write-Host "Start length: $($c.Length)"

# === HANDLE 'run start' commands ===
$cmdOld = " run start <span class=3DSpellE>qer</span>-app-portal"
$cmdNew = " serve <span class=3DSpellE>qer</span>-app-portal --configuration development"
$npmPat = "windowtext'>npm</span>"
$ngPat  = "windowtext'>ng</span>"

$ms = [regex]::Matches($c, [regex]::Escape($cmdOld))
Write-Host "Found $($ms.Count) 'run start' occurrences"

for ($i = $ms.Count - 1; $i -ge 0; $i--) {
    $cmdPos = $ms[$i].Index
    $c = $c.Remove($cmdPos, $ms[$i].Length).Insert($cmdPos, $cmdNew)
    $searchStart = [Math]::Max(0, $cmdPos - 400)
    $searchBlock = $c.Substring($searchStart, $cmdPos - $searchStart)
    $npmIdx = $searchBlock.LastIndexOf($npmPat)
    if ($npmIdx -ge 0) {
        $absNpmPos = $searchStart + $npmIdx
        $c = $c.Remove($absNpmPos, $npmPat.Length).Insert($absNpmPos, $ngPat)
        Write-Host "  Fixed #$i"
    } else { Write-Host "  WARN: npm not found for #$i" }
}

# === build:watch:dynamic unite-plugin ===
$old6 = " run <span class=3DSpellE><span class=3DGramE>build:watch</span=`r`n>:dynamic</span>`r`nunite-plugin "
$new6 = " <span class=3DSpellE>nx</span> build unite-plugin --watch "
$ct = ([regex]::Matches($c,[regex]::Escape($old6))).Count
$c = $c.Replace($old6, $new6)
Write-Host "unite-plugin: $ct replaced"

# === build:watch qbm (with GramE wrapper) ===
$old7 = " run <span class=3DSpellE><span class=3DGramE>build:watch</span=`r`n></span>`r`n<span class=3DSpellE><span class=3DGramE>qbm</span"
$new7 = " <span class=3DSpellE>nx</span> build <span class=3DSpellE><span class=3DGramE>qbm</span"
$ct7 = ([regex]::Matches($c,[regex]::Escape($old7))).Count
# Note: --watch needs to be added AFTER the library name tag closes, but that varies
# For now just replace the command portion; --watch will be missing for this one occurrence
# Actually let me check: this is in the Commands list 'npm run build qbm' which is NOT build:watch
# Let me check what this pattern actually is
Write-Host "qbm GramE: $ct7 found (skipping - need to verify context)"

# === Change npm->npx for all 'nx build' patterns we already created ===
$nxPat = "<span class=3DSpellE>nx</span> build"
$nxMs = [regex]::Matches($c, [regex]::Escape($nxPat))
Write-Host "`n'nx build' patterns found: $($nxMs.Count)"

$npmFixed = 0
for ($i = $nxMs.Count - 1; $i -ge 0; $i--) {
    $m = $nxMs[$i]
    $searchStart = [Math]::Max(0, $m.Index - 400)
    $searchBlock = $c.Substring($searchStart, $m.Index - $searchStart)
    $npmIdx = $searchBlock.LastIndexOf($npmPat)
    if ($npmIdx -ge 0) {
        $absNpmPos = $searchStart + $npmIdx
        $c = $c.Remove($absNpmPos, $npmPat.Length).Insert($absNpmPos, "windowtext'>npx</span>")
        $npmFixed++
    }
}
Write-Host "Changed $npmFixed 'npm' to 'npx' for build commands"

# === Status check ===
$remaining = ([regex]::Matches($c,"build:watch")).Count
$npmLeft = ([regex]::Matches($c,[regex]::Escape($npmPat))).Count
$startLeft = ([regex]::Matches($c,[regex]::Escape("run start"))).Count
Write-Host "`nRemaining 'build:watch': $remaining"
Write-Host "Remaining 'npm' windowtext: $npmLeft"
Write-Host "Remaining 'run start': $startLeft"

[IO.File]::WriteAllText($p, $c)
Write-Host "Saved. Length: $($c.Length)"
