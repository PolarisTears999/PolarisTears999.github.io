/*ImageBox*/

let imageBox = () => {
    addClass('img', 'ImageBox')
    bindClick('.ImageBox', function () {
        const targetEle = `
    <div class="image-box-plugin">
        <div class="image-box-container">
            <div class="spinner" id="image-box-loading" style="display: none;">
            </div>
            <img id="image-box-img">
            <img id="image-box-fake" onload="setAttr('#image-box-img', 'src', this.src);
            hide('#image-box-loading');show('#image-box-img');" 
            onerror="this.src='https://img.imjad.cn/images/2016/12/23/404.jpg';" src="${this.src}" 
            style="display: none;">
        </div>
    </div>`
        document.querySelector('body').insertAdjacentHTML('beforeend', targetEle);
        let imgW = this.offsetWidth, imgH = this.offsetHeight, scrW = document.body.clientWidth, scrH = window.screen.availHeight;
        let newW = this.offsetWidth, newH = this.offsetHeight, scale = imgW / imgH;
        if (imgW > scrW) {
            newW = scrW;
            newH = newW / scale;
            setAttr('.image-box-plugin img', 'height', '')
            setAttr('.image-box-plugin img', 'width', newW)
            if (newH > scrH) {
                newH = scrH;
                newW = newH * scale;
                setAttr('.image-box-plugin img', 'width', '')
                setAttr('.image-box-plugin img', 'height', newH)
            }
        } else {
            if (imgH > scrH) {
                newH = scrH;
                newW = newH * scale;
                setAttr('.image-box-plugin img', 'width', '')
                setAttr('.image-box-plugin img', 'height', newH)
                if (newW > scrW) {
                    newW = scrW;
                    newH = newW / scale;
                    setAttr('.image-box-plugin img', 'height', '')
                    setAttr('.image-box-plugin img', 'width', newW)
                }
            }
        };
        fadeIn('.image-box-plugin', 30, function () {
            setAttr('.image-box-plugin', 'display', 'table')
        })
        bindClick(['.image-box-plugin img', '.image-box-plugin', '.image-box-container'], function () {
            fadeOut('.image-box-plugin', 30, function () {
                const element = document.querySelector('.image-box-plugin');
                if (element) {
                    element.parentNode.removeChild(element);
                }
            })
        }
        )
    });
}

// 添加类名
function addClass(selector, className) {
    const list = document.querySelectorAll(selector)
    for (let i = 0; i < list.length; i++) {
        const element = list[i]
        element.classList.add(className)
    }
}

// 绑定点击事件
function bindClick(selector, cb) {
    if (!Array.isArray(selector)) {
        selector = [selector]
    }
    selector.forEach(e => {
        const list = document.querySelectorAll(e)
        for (let i = 0; i < list.length; i++) {
            const element = list[i]
            element.onclick = cb
        }
    })
}
// 设置属性
function setAttr(selector, key, value) {
    const list = document.querySelectorAll(selector)
    for (let i = 0; i < list.length; i++) {
        const element = list[i]
        element.setAttribute(key, value)
    }
}

function show(selector) {
    document.querySelector(selector).style.display = "inline-block";
}

function hide(selector) {
    document.querySelector(selector).style.display = "none";
}

function fadeIn(selector, time, cb) {
    const el = document.querySelector(selector)
    if (el.style.opacity === "") {
        el.style.opacity = 0;
    }
    if (el.style.display === "" || el.style.display === 'none') {
        el.style.display = 'block';
    }

    let t = setInterval(function () {
        if (el.style.opacity < 1) {
            el.style.opacity = parseFloat(el.style.opacity) + 0.01;
        }
        else {
            clearInterval(t);
            cb()
        }
    }, time / 100);
}

function fadeOut(selector, time, cb) {
    const el = document.querySelector(selector)
    if (el.style.opacity === "") {
        el.style.opacity = 1;
    }
    if (el.style.display === "" || el.style.display === 'none') {
        el.style.display = 'block';
    }

    let t = setInterval(function () {
        if (el.style.opacity > 0) {
            el.style.opacity = parseFloat(el.style.opacity) - 0.01;
        }
        else {
            clearInterval(t);
            el.style.display = 'none'
            cb()
        }
    }, time / 100);
}

imageBox()

