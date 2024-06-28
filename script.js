document.addEventListener('DOMContentLoaded', function () {
    function getRandomValues(num, min, max) {
        const values = [];
        for (let i = 0; i < num; i++) {
            values.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return values;
    }

    const orderData = getRandomValues(12, 0, 100);

    const backgroundColors = orderData.map(value => {
        if (value <= 33) {
            return '#E7A594';
        } else if (value <= 66) {
            return '#F9C666';
        } else {
            return '#A4F3D5';
        }
    });

    const ctx = document.getElementById('order-history-chart').getContext('2d');
    const orderHistoryChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            datasets: [{
                label: 'Order History',
                data: orderData,
                backgroundColor: backgroundColors,
                borderColor: backgroundColors,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            },
            layout: {
                padding: {
                    bottom: 0
                }
            }
        }
    });

    const filterSelect = document.getElementById('filter');
    filterSelect.addEventListener('change', function () {
        const selectedValue = this.value;
        const rows = document.querySelectorAll('table tbody tr');

        rows.forEach(row => {
            if (selectedValue === 'all') {
                row.style.display = '';
            } else if (row.getAttribute('data-status') === selectedValue) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

function changeSlide(index) {
    const slides = document.querySelectorAll('.slider img');
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
            slide.classList.remove('previous');
        } else {
            slide.classList.remove('active');
            if (slide.classList.contains('previous')) {
                slide.classList.remove('previous');
            }
        }
    });

    slides.forEach((slide, i) => {
        if (i === index - 1 || (index === 0 && i === slides.length - 1)) {
            slide.classList.add('previous');
        }
    });

    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}
