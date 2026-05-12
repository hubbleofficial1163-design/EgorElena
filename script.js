document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка при клике на индикатор
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const invitationMessage = document.querySelector('.invitation-message');
            invitationMessage.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Обработка формы RSVP
    const rsvpForm = document.getElementById('rsvpForm');
    const formMessage = document.getElementById('formMessage');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем значения формы
            const name = document.getElementById('name').value;
            const attendance = document.getElementById('attendance').value;
            
            // Простая имитация отправки
            formMessage.textContent = `Благодарим вас, ${name}! Ваш ответ принят. Мы свяжемся с вами для уточнения деталей.`;
            formMessage.style.display = 'block';
            formMessage.style.backgroundColor = 'rgba(180, 189, 170, 0.3)';
            formMessage.style.color = '#4a5345';
            formMessage.style.border = '1px solid rgba(162, 172, 148, 0.5)';
            
            // Сбрасываем форму
            rsvpForm.reset();
            
            // Плавная прокрутка к сообщению
            formMessage.scrollIntoView({ 
                behavior: 'smooth',
                block: 'center'
            });
            
            // Скрываем сообщение через 6 секунд
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 6000);
        });
    }
});


.map-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 15px;
    padding: 8px 16px;
    background-color: rgba(135, 157, 144, 0.85);
    border: none;
    border-radius: 30px;
    color: white;
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.map-btn:hover {
    background-color: #637257;
    transform: translateY(-2px);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
}