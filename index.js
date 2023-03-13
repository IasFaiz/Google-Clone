var element= document.getElementById("body");
element.addEventListener("submit",(e)=>{
    e.preventDefault();
    var text2= document.getElementById('value').value;
    var text=`<b><em> ${text2} </em></b>`
    var newDom= `<div>
    <h1>Know more about ${text}.</h1>
    <p>
    ${text}Lorem ipsum dolor sit amet ${text}consectetur adipisicing elit. Velit modi ${text}iusto omnis illo provident, enim veniam ${text}quaerat ${text}voluptatibus rerum,${text} ab amet voluptatum ${text}optio adipisci non odio, ${text}nam sapiente${text} blanditiis illum repellendus?${text} Voluptatum voluptates${text} eum impedit aperiam${text} sed ex dolorem${text} aut provident! Tenetur accusamus a voluptatem${text} magnam, corrupti ea${text} quam sint?${text}
        Lorem ${text}ipsum dolor sit amet consectetur ${text}adipisicing elit. ${text}Velit modi iusto omnis illo ${text}provident, enim veniam ${text}quaerat voluptatibus ${text}rerum, ab amet voluptatum ${text}optio adipisci non odio, ${text}nam sapiente${text} blanditiis illum repellendus?${text} Voluptatum voluptates${text} eum impedit aperiam${text} sed ex dolorem${text} aut provident! Tenetur accusamus a voluptatem${text} magnam, corrupti ea${text} quam sint?${text}
        Lorem ipsum ${text}dolor sit amet consectetur ${text}adipisicing elit. Velit modi ${text}iusto omnis illo provident, ${text}enim veniam ${text}quaerat voluptatibus ${text}rerum, ab amet voluptatum ${text}optio adipisci non odio, ${text}nam sapiente${text} blanditiis illum repellendus?${text} Voluptatum voluptates${text} eum impedit aperiam${text} sed ex dolorem${text} aut provident! Tenetur accusamus a voluptatem${text} magnam, corrupti ea${text} quam sint?${text}
    </p>
    <br><br>
</div>`
    console.log(text);
    body.innerHTML=' ';
    body.innerHTML=`<div id="header" style="display:flex; justify-content: flex-start; padding: 20px 12px;margin-bottom:20px;">
    <img src="logo.png" alt="none" style="padding:12px 10px;height:30px;width: 94px;">
    <div id="input" style="color: gray; display: flex; align-items:flex-end; border: 1px solid lightgray; height: 26px; padding: 10px 20px; border-radius: 999px; width: 70vw; ; margin-top: 6px; margin-left: 20px; max-width: 560px;" >
        <span class="material-symbols-outlined">
            search
            </span>
            <input type="text" placeholder="Search here" name="" id="value" style="font-size:20px;flex: 1; padding:0px 30px; border: none; outline: none; width:100px;">
            <span class="material-symbols-outlined">
              mic
              </span>

    </div>
</div>`;

    for(let i=0;i<6;i++){
      
        body.insertAdjacentHTML('afterEnd',`${newDom}`);
    }
});