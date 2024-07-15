var current = 0
const divs = document.querySelectorAll('.main_dives')
const red_imgs = document.querySelectorAll('.red_imgs')
const default_imgs = document.querySelectorAll('.default_imgs')
const main_block_text = document.querySelector('#main_block_txt')
divs.forEach(qwe => {
	qwe.addEventListener('click', function () {
		const current_id = this.id.length - 1
		current = this.id[current_id]
		red_imgs.forEach(img => (img.style.display = 'none'))
		default_imgs.forEach(img => (img.style.display = 'block'))
		qwe.childNodes[1].childNodes[3].style.display = 'block'
		qwe.childNodes[1].childNodes[1].style.display = 'none'
		main_block_text.textContent = texts[current - 1].text
	})
})
$(document).ready(function () {
	var mediaq = window.matchMedia('(max-width: 800px)')
	if (!mediaq.matches) {
		$('.main_dives').on('click', function () {
			$('.main_dives').removeClass('active')
			$(this).addClass('active')
			$('.img_roles').hide()
			$(this).find('.img_roles').show()
		})
	}
	$('#left_img').on('click', function () {
		current--
		if (current <= 0) {
			current = 7
		}
		let zx = '#main_div' + current
		$(zx).trigger('click')
	})

	$('#right_img').on('click', function () {
		current++
		if (current > 7) current = 1
		let zx = '#main_div' + current
		$(zx).trigger('click')
	})
})

const texts = [
	{
		id: 1,
		text: 'Выступает на турнирах, участвует в матчах и вступает в команды. У игроков есть уровень навыка и рейтинг, рассчитанный на основе статистики. Также они могут заключать контракты с командами и клубами.',
	},
	{
		id: 2,
		text: 'Занимается развитием игроков, клубов и команд. Его рейтинг растет вместе с показателями команды, к примеру, с получением подопечными трофеев и наград.',
	},
	{
		id: 3,
		text: 'Занимается проведением турниров и лиг. Может быть нанят аренами или пользователями, которые хотят провести интересный товарищеский матч.',
	},
	{
		id: 4,
		text: 'Судит и принимает важные решения в матчах и турнирах. Рейтинг судьи зависит от оценки его деятельности другими игроками и организаторами.',
	},
	{
		id: 5,
		text: 'Оценивает пользователей и сообщества сайта. Этих участников могут нанять организаторы турниров для проведения предматчевой и послематчевой аналитики.',
	},
	{
		id: 6,
		text: 'Комментирует матчи и трансляции. Может быть приглашен на турниры. Статус комментатора растет за счет среднего количества просмотров трансляций с его комментированием и оценок пользователей.',
	},
	{
		id: 7,
		text: 'Занимается поиском пользователей для сообществ и наоборот. После нахождения, в зависимости от результатов статистических показателей найденных пользователей или сообществ будет меняться его рейтинг.',
	},
]
