window.addEventListener('DOMContentLoaded', (event) => {
    const shopBtn = document.getElementById('shop-btn')
    const trialBtn = document.getElementById('trial-btn')
    const homepage = document.getElementById('homepage')
    const showpage = document.getElementById('bamboo')
    const nextBtn = document.getElementById('next-btn')
    const backBtn = document.getElementById('back-btn')

    const pages = ["bamboo", "plastics", "designed", "collection"]
    let counter = 0

    shopBtn.addEventListener('click', function (event){
        event.preventDefault();
        homepage.style.display = 'none'
        showpage.style.display = 'block'
    })

    trialBtn.addEventListener('click', function (event){
        event.preventDefault();
        homepage.style.display = 'none'
        showpage.style.display = 'block'
    })

    nextBtn.addEventListener('click', function (event){
        event.preventDefault();
        currentPage = document.getElementById(pages[counter])
        nextPage = document.getElementById(pages[counter+1])
        currentPage.style.display = 'none'
        nextPage.style.display = 'block'
        if(counter < 4){
            counter += 1
        }
        else {
            counter = 0
        }
        console.log(counter)
    })


});