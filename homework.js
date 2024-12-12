/* Задание 1
Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

Реализуйте геттер allBooks, который возвращает текущий список книг.

Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.*/

class Library {
    #books = [];

    constructor(arrBooks = []) {
        if (arrBooks.length !== new Set(arrBooks).size) {
            throw new Error("В библиотеке есть дублирующиеся экземпляры");
        }
        this.#books = arrBooks;
    }

    get allBooks() {
        return this.#books;
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error("Эта книга уже внесена в библиотеку");
        } else {
            this.#books.push(title);
        }
    }

    removeBook(title) {
        if (!this.hasBook(title)) {
            throw new Error("This book is not in the library");
        } else {
            this.#books.splice(this.#books.indexOf(title), 1);
        }
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

let library = new Library([
    "Незнайка",
    "Колобок",
    "Волшебник Изумрудного города",
    "Сто лет тому вперед",
]);

// Ошибка создания библиотеки с дубликатами книг
// let library = new Library([
//     "Незнайка",
//     "Незнайка",
//     "Колобок",
//     "Волшебник Изумрудного города",
//     "Сто лет тому вперед",
// ]);

console.log(library.allBooks);
console.log([...library.allBooks].join(", "));

library.addBook("Винни Пух и все-все-все");
console.log(
    "Добавление издания. Библиотека содержит: ",
    [...library.allBooks].join(", ")
);

// Ошибка добавления существующей книги
// library.addBook("Винни Пух и все-все-все");
// console.log(
//     "Добавление издания. Библиотека содержит: ",
//     [...library.allBooks].join(", ")
// );

library.removeBook("Незнайка");
console.log(
    "Удаление издания. Общая библиотека содержит:",
    [...library.allBooks].join(", ")
);

/* Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения. */

let stringInput = document.querySelector(".user-input");
let button = document.querySelector(".button");
let printBlock = document.querySelector(".printBlock");
let errorMessage = document.querySelector(".errorMessage");

button.addEventListener("click", () => {
    try {
        const string = stringInput.value;
        if (string.length < 50 || string.length > 500) {
            throw new Error(
                "Комментарий не может быть менее 50 или более 500 символов"
            );
        } else {
            const newComment = document.createElement("p");
            newComment.textContent = string;
            printBlock.appendChild(newComment);
            errorMessage.textContent = "";
        }
    } catch (error) {
        errorMessage.textContent = error.message;
    } finally {
        console.log("Попытка добавления коментария завершена");
    }
});
