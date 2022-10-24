import $ from "jquery";

$(function() {

    const inputs = document.querySelectorAll(".modal__input-group");
    const button = document.querySelector("#btnLashGroup");
    const buttonDisabled = document.querySelector("#btnLashGroupDisabled");
    

    const handler = (e) => {
      const chacked = document.querySelectorAll("input:checked");
      
      if (chacked.length === inputs.length) {
        
        button.classList.add('active');
        buttonDisabled.classList.remove('active'); 

      } else {
        button.classList.remove('active');
        buttonDisabled.classList.add('active');
      }

    }
    
    inputs.forEach(el => {
      el.addEventListener("change", handler);
    })

    const inputs2 = document.querySelectorAll(".modal__input-vip");
    const button2 = document.querySelector("#btnLashVip");
    const buttonDisabled2 = document.querySelector("#btnLashVipDisabled");
    

    const handler2 = (e) => {
      const chacked = document.querySelectorAll("input:checked");
      
      if (chacked.length === inputs.length) {
        
        button2.classList.add('active');
        buttonDisabled2.classList.remove('active'); 

      } else {
        button2.classList.remove('active');
        buttonDisabled2.classList.add('active');
      }

    }
    
    inputs2.forEach(el => {
      el.addEventListener("change", handler2);
    })
});