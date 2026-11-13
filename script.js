// Efeito sutil de interatividade ao rolar e animação de entrada dos cards
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".timeline-card");

    // Configuração do efeito de aparição suave (Observer)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });

    console.log("O Futuro Não Espera - Site carregado com sucesso. #LOUD");
});