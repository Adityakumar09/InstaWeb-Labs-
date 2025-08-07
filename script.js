class FormValidator {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.nameError = document.getElementById('nameError');
        this.emailError = document.getElementById('emailError');
        this.resultSection = document.getElementById('resultSection');
        this.resultContent = document.getElementById('resultContent');
        
        this.init();
    }
    
    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.nameInput.addEventListener('input', () => this.validateName());
        this.emailInput.addEventListener('input', () => this.validateEmail());
        this.nameInput.addEventListener('blur', () => this.validateName());
        this.emailInput.addEventListener('blur', () => this.validateEmail());
    }
    
    validateName() {
        const name = this.nameInput.value.trim();
        
        if (name === '') {
            this.showFieldError(this.nameInput, this.nameError, 'Name is required');
            return false;
        } else if (name.length < 2) {
            this.showFieldError(this.nameInput, this.nameError, 'Name must be at least 2 characters');
            return false;
        } else {
            this.showFieldSuccess(this.nameInput, this.nameError);
            return true;
        }
    }
    
    validateEmail() {
        const email = this.emailInput.value.trim();
        
        if (email === '') {
            this.showFieldError(this.emailInput, this.emailError, 'Email is required');
            return false;
        } else if (!email.includes('@')) {
            this.showFieldError(this.emailInput, this.emailError, 'Email must contain "@" symbol');
            return false;
        } else if (!this.isValidEmailFormat(email)) {
            this.showFieldError(this.emailInput, this.emailError, 'Please enter a valid email format');
            return false;
        } else {
            this.showFieldSuccess(this.emailInput, this.emailError);
            return true;
        }
    }
    
    isValidEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    showFieldError(input, errorElement, message) {
        input.classList.remove('success');
        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
    
    showFieldSuccess(input, errorElement) {
        input.classList.remove('error');
        input.classList.add('success');
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    }
    
    handleSubmit(event) {
        event.preventDefault();
        
        const isNameValid = this.validateName();
        const isEmailValid = this.validateEmail();
        
        if (isNameValid && isEmailValid) {
            this.showSuccessMessage();
            this.simulatePythonProcessing();
        } else {
            this.showErrorAlert('Please fix the errors above before submitting.');
        }
    }
    
    showSuccessMessage() {
        const name = this.nameInput.value.trim();
        const email = this.emailInput.value.trim();
        
        this.showSuccessAlert(`Form submitted successfully!`);
        
        this.resultSection.style.display = 'block';
        this.resultSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    simulatePythonProcessing() {
        const name = this.nameInput.value.trim();
        const email = this.emailInput.value.trim();
        
        setTimeout(() => {
            this.resultContent.innerHTML = `Python Script Output:
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            Processing form data...
            Validation completed successfully!

            Received data: Name - ${name}, Email - ${email}

            Status: Data processed successfully
            Timestamp: ${new Date().toLocaleString()}
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;
        }, 500);
    }
    
    showSuccessAlert(message) {
        this.showAlert(message, 'success');
    }
    
    showErrorAlert(message) {
        this.showAlert(message, 'error');
    }
    
    showAlert(message, type) {
        const existingAlerts = document.querySelectorAll('.alert');
        existingAlerts.forEach(alert => alert.remove());
        
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        alert.style.display = 'block';
        
        const formContainer = document.querySelector('.form-container');
        formContainer.insertBefore(alert, formContainer.firstChild);
        
        setTimeout(() => {
            if (alert.parentNode) {
                alert.remove();
            }
        }, 5000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FormValidator();
});
