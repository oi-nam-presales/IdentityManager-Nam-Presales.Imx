# Messages and Translation
This section describes components that are used to display messages in different languages to the user. There are the following components and services available.

## 1. Messages

### 1.1. User Messages
User messages are displayed using the [`UserMessageComponent`](../../components/UserMessageComponent.html), which renders/uses an Elemental UI alert component.

### 1.2. Message Dialog
The message dialog is defined in the [`MessageDialogComponent`](../../components/MessageDialogComponent.html). \
It can display the same information the normal [`UserMessageComponent`](../../components/UserMessageComponent.html) is showing, but it uses an Angular Material Dialog instead.

[`MessageDialogComponent`](../../components/MessageDialogComponent.html) is part of the [`QbmModule`](../../modules/QbmModule.html).

### 1.3. Confirmation Dialog
The confirmation dialog is opened using the [`ConfirmationService`](../../injectables/ConfirmationService.html). \
It allows the user to acknowledge the information it is presented.

### 1.4. Snackbar
A possible way to display a small notification is by using an Angular Snackbar component. To open a pre defined snackbar, you can use the [`SnackBarService`](../../injectables/SnackBarService.html).
It is part of the [`QbmModule`](../../modules/QbmModule.html) as well.

### 1.5. Logging
There is a special logger, that can be used, to send messages to the command line.

The code is defined in the [ClassLoggerService](../../injectables/ClassloggerService.html).

### 1.6 Error Handling
Error handling is handled by our own `ErrorHandler`.

It is defined in the [`GlobalErrorHandler`](../../injectables/GlobalErrorHandler.html).

---

## 2. Translation
Our libraries are using translatable keys, identifiable by the prefix `#LDS#`. The services need to translate these keys into localized text at runtime are described below.

### 2.1. Translation
This uses the [`ImxTranslationProviderService`](../../injectables/ImxTranslationProviderService.html) to initialize the translation information. You can use this service for translation purposes as well, but it is recommended to use the `TranslateService` from `@ngx-translate`, which is used in this service anyway.

### 2.2. LDS Replace
The [`LdsReplaceModule`](../../modules/LdsReplaceModule.html) contains a pipe which can be used to replace placeholder inside LDS key translations. It is defined in the [`LdsReplacePipe`](../../injectables/LdsReplacePipe.html) class.

### 2.3. Parameterized Text
The [`ParameterizedTextModule`](../../modules/ParameterizedTextModule.html) provides components and services to display a parameterized text that emphasizes it's parameters. The UI is defined in the [`ParameterizedTextComponent`](../../components/ParameterizedTextComponent.html).

### 2.4. Translation Editor
The [`TranslationEditorComponent`](../../) is declared in the [`QbmModule`](../../modules/QbmModule.html). It can be used to add translations to an LDS key.