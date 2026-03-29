import http from 'k6/http';
import { check, sleep } from 'k6';

// Объявляем сколько будет итераций
export const options = {
    iterations: 10,
    //duration: '30s',
    //vus: 10,
};

// Основная функция с которой начинается тест
export default function () {
    const res = http.get('https://quickpizza.grafana.com/');
    // Проверки теста
    check(res, 
        {'status was 200': (r) => r.status == 200,
        'response time < 500ms': (r) => r.timings.duration < 500,

        }
    );

    // Слип нужен для того, чтобы имитировать правдопадобное использование запросов
    sleep(1);

}