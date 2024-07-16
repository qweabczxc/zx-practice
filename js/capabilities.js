users = [
	{
		id: 1,
		text: 'Выступления на турнирах с призовым фондом',
	},
	{
		id: 2,
		text: 'Формула расчета навыка основанная на личных показателях',
	},
	{
		id: 3,
		text: 'Уникальные карточки профиля для пользователей',
	},
	{
		id: 4,
		text: 'Публикация постов и новостей на своей странице',
	},
	{
		id: 5,
		text: 'Создание клуба, команды или организации',
	},
	{
		id: 6,
		text: 'Развитие в одной или нескольких отраслях киберспорта',
	},
]
organizations = [
	{
		id: 1,
		text: 'Автоматизированная система проведения мероприятий',
	},
	{
		id: 2,
		text: 'Огромное количество возможностей для настройки турниров',
	},
	{
		id: 3,
		text: 'Найм пользователей из разных отраслей для проведения турниров',
	},
	{
		id: 4,
		text: 'Возможность проведения платных мероприятий',
	},
]
teams_clubs = [
	{
		id: 1,
		text: 'Гарантированная выплата выигранных призов',
	},
	{
		id: 2,
		text: 'Подписание контрактов с пользователями из разных отраслей',
	},
	{
		id: 3,
		text: 'Просмотр демо матчей для тренировок и разбора игры',
	},
	{
		id: 4,
		text: 'Проведение товарищеских матчей с другими командами',
	},
]
arenas = [
	{
		id: 1,
		text: 'Удобный и информационный профиль',
	},
	{
		id: 2,
		text: 'Система рекомендаций позволит привлечь новых клиентов',
	},
	{
		id: 3,
		text: 'Онлайн бронирование компьютеров через наш сайт',
	},
	{
		id: 4,
		text: 'Автоматизированная система проведения LAN мероприятий',
	},
	{
		id: 5,
		text: 'Найм организаторов для проведения масштабных мероприятий',
	},
	{
		id: 6,
		text: 'Возможность стать домашней ареной клуба или команды',
	},
]

const right_arrows = document.querySelectorAll('#arrow_right')
const left_arrows = document.querySelectorAll('#arrow_left')
const krugi = document.querySelectorAll('.krugi')
const kart = document.querySelectorAll('.kart')
const txt_kart = document.querySelectorAll('#txt_cart')
let current = [1, 1, 1, 1]

const arrows = (side, zx) => {
	side.addEventListener('click', function () {
		const currentIndex = Array.from(kart).indexOf(this.closest('.kart'))
		const currentKrugi = krugi[currentIndex]
		max = currentKrugi.children.length
		krugi[currentIndex].children[current[currentIndex] - 1].classList.add('rec')
		if (zx == 'left') {
			current[currentIndex] <= 1
				? (current[currentIndex] = max)
				: current[currentIndex]--
		} else {
			current[currentIndex] >= max
				? (current[currentIndex] = 1)
				: current[currentIndex]++
		}
		krugi[currentIndex].children[current[currentIndex] - 1].classList.remove('rec')
		let qqe = `(${side.classList.value})[${current[currentIndex] - 1}].text`
		txt_kart[currentIndex].textContent = eval(qqe)
		//users[1].text
	})
}


right_arrows.forEach(right => {
	arrows(right, "right")
})
left_arrows.forEach(left => {
	arrows(left, "left")
})
