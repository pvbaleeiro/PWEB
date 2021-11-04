/* Variáveis */
// Others

const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Elements screen

const form = document.forms.mainForm;

/* Main Functions */

function handleSubmit() {
    if (validateNameInput() && validateEmailInput() && validateCommentInput() && validateRadiosInput()) {
        clearAllFields();
    }
}

/* Auxiliary Functions */

function validate() {
    validateNameInput();
}

function validateNameInput() {
    const nameInput = form.elements[0];
    if (nameInput.value.length < 10) {
        alert("O campo Nome deve ter pelo menos 10 caracteres.")
        return false;
    }

    return true;
}

function validateEmailInput() {
    const emailInput = form.elements[1];
    if (!pattern.test(String(emailInput.value).toLowerCase())) {
        alert("Insira um e-mail em um formato válido no campo Email.")
        return false;
    }

    return true;
}

function validateCommentInput() {
    const commentInput = form.elements[2];
    if (commentInput.value.length < 20) {
        alert("O campo Comentário deve ter pelo menos 20 caracteres.")
        return false;
    }

    return true;
}

function validateRadiosInput() {
    const radioYes = form.elements[3];
    const radioNo = form.elements[4];

    if (!radioYes.checked && !radioNo.checked) {
        alert("Você precisa selecionar pelo menos uma opção (Sim / Não).")
        return false;
    }

    if (radioYes.checked) {
        alert("Volte sempre à está página!")
    } else {
        alert("Que  bom que você voltou a visitar esta página!")
    }

    return true;
}

function clearAllFields() {
    form.reset();
}