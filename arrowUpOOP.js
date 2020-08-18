export default class ArrowUp {
	constructor() {
		this.settings = "background-color: rgba(58, 46, 46, 0.5);position: fixed;top: 50px;left: 20px;padding: 15px 20px;cursor:pointer;font-size: 25px;border-radius: 8px;"
	}

	addClass(className){
		document.getElementById('arrowToTop').classList.add(className)
		this.settings = ''
		this.create()
	}

	check(){
		let sets = {
			id : document.getElementById('arrowToTop').id,
			classList : document.getElementById('arrowToTop').classList,
			styles: document.getElementById('arrowToTop').getAttribute('style'),
			defaultSettings : this.settings
		}
		console.log(sets)
	}

	changeContent(content){
		document.getElementById('arrowToTop').innerText = content
	}

	createArrow() {
		let div = document.createElement('div')
		div.textContent = 'Вверх'
		div.id = 'arrowToTop'
		div.style.cssText = "display: none"
		div.addEventListener('click', function(){
			window.scrollTo(pageXOffset, 0)
		})
		return div
	}

	create() {
		let styles = this.settings
		document.body.append(this.createArrow())
		window.addEventListener('scroll', function () {
			if(window.pageYOffset > 250){
				document.getElementById('arrowToTop').setAttribute('style', styles)
			} else {
				document.getElementById('arrowToTop').setAttribute('style', 'display: none')
			}
		})
	}
}