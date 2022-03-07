let blogs = []

function addBlog() {

    let title = document.getElementById('Pname').value;
    let start = document.getElementById('startDate').value;
    let end = document.getElementById('endDate').value;
    let content = document.getElementById('text1').value;
    let image = document.getElementById('input-blog-image').value;

    // image = URL.createObjectURL(image)

    let blog = {
        title: title,
        start: start,
        end: end,
        content: content,
        image: image,
        postedAt: new Date()
    }

    blogs.push(blog)

    renderBlog()

}


function renderBlog() {
    
    let blogContainer = document.getElementById('card')

    blogContainer.innerHTML = `<div class="card1">
    <img src="assets/card1.png">
    <h4>Dumbways Mobile App - 2022</h4>

    <p>Durasi : 3 Bulan</p>

    <p class="p2">App that use for dumbways student, it was deployed and can downloaded on play store.  Happy Download</p>
    <div class="image">
        <img src="assets/googleplay.png">
        <img src="assets/android-logo.png">
        <img src="assets/java.png">
    </div> 
    <div class="buttonEnd">
        <div class="left-side">
            <a href="#">Edit</a>
        </div>
        <div class="right-side">
            <a href="#">Delete</a>
        </div>
    </div>
</div>`

    for(let i = 0; i < blogs.length; i++){

    blogContainer.innerHTML += `<div class="card1">
    <img src="${blogs[i].image}">
    <h4>${blogs[i].title}</h4>

    <p>Durasi : 3 Bulan</p>
    ${getFullTime(blogs[i].postedAt)}

    <p class="p2">${blogs[i].content}</p>
    <div class="image">
    <img src="assets/googleplay.png">
    <img src="assets/android-logo.png">
    <img src="assets/java.png">
    </div> 
    <div class="buttonEnd">
        <div class="left-side">
        <a href="#">Edit</a>
    </div>
    <div class="right-side">
        <a href="#">Delete</a>
    </div>
</div>
</div>`
    }
}


let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
   ]

function getFullTime (time) {
    let date = time.getDate()
    let monthIndex = time.getMonth()
    
    let year = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

    return fullTime
}
