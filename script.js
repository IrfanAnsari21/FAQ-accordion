const questionButtons = document.querySelectorAll('.faq-question');
const answerTexts = document.querySelectorAll('.faq-answer');
const icons = document.querySelectorAll('.faq-question img');

questionButtons.forEach(button => button.addEventListener('click', () => {
    const targetAnswer = document.getElementById(button.getAttribute('aria-controls'));
    const buttonIcon = button.querySelector('img');
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    answerTexts.forEach(answer => answer.classList.remove('open'));
    questionButtons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
    icons.forEach(icon => {
        icon.src = 'assets/images/icon-plus.svg';
        icon.alt = 'Plus icon';
    });

    if (!isExpanded) {
        targetAnswer.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
        buttonIcon.src = 'assets/images/icon-minus.svg';
        buttonIcon.alt = 'Minus icon';
    }
}));
