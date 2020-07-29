export default [
  {
    id: 1,
    name: "pokem",
    markup: `<div class="pokem"></div>`,
    css: `.pokem {
    position: relative;
    display: block;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: #eeeeee; }
    .pokem:after, .pokem:before {
        content: "";
        border-radius: 50%; 
    }
    .pokem::before {
        position: absolute;
        border: 35px solid transparent;
        border-top-color: #D82B2E;
        top: 0;
        left: 0;
        animation: air-spin 2s linear infinite; 
    }
    .pokem::after {
        position: absolute;
        top: 20px;
        left: 20px;
        height: 30px;
        width: 30px;
        background-color: #3A85D9; 
    }
    @keyframes air-spin {
        0% {
            transform: rotate(0deg); }
        100% {
            transform: rotate(360deg); } 
    }`,
  },
  //   {
  //     id: 2,
  //     name: "Mitosys",
  //     markup: `<div class="mitosys">
  //                 <span class="box box-left"></span>
  //                 <span class="box box-right"></span>
  //             </div>
  //                     `,
  //     css: `.blur {
  //             margin: 0 auto;
  //             display: block;
  //             width: 300px;
  //             height: 150px;
  //             position: relative;
  //             background: #fff;
  //             filter: blur(10px) contrast(40);
  //         }
  //         .box {
  //             display: block;
  //             height: 70px;
  //             width: 70px;
  //             position: relative;
  //             border-radius: 50%;
  //             left: 0%;
  //             background-color: #000;
  //         }
  //         .box-left {
  //             left: 40%;
  //             top: 25%;
  //             background-color: #000;
  //             animation: go-r 3s ease-out infinite;
  //         }
  //         .box-right {
  //             left: 15%;
  //             top: -22%;
  //             animation: go-l 4s ease-out infinite;
  //         }
  //         @keyframes go-r {
  //             0%, 100% {
  //                 left: 20%;
  //                 transform: scale(1.2); }
  //             50% {
  //                 left: 50%;
  //                 transform: scale(0.5); }
  //             }
  //         @keyframes go-l {
  //             0%, 100% {
  //                 left: 50%; }
  //             50% {
  //                 left: 20%;
  //                 transform: scale(0.8); }
  //         }`,
  //   },
  {
    id: 3,
    name: "Square Wheel",
    markup: `<div class="square-wheel"></div>`,
    css: `.square-wheel {
    position: relative;
    display: block;
    height: 70px;
    width: 70px;
    background-color: #eeeeee;
    border-radius: 5px;
    animation: spin 4s ease infinite; }
    .square-wheel::before {
        content: "";
        display: block;
        position: relative;
        top: 17px;
        left: 17px;
        height: 35px;
        width: 35px;
        background-color: #1ABC9C;
        animation: spin 2s ease infinite; }
    @keyframes spin {
    0% {
        transform: rotate(0deg); }
    50% {
        transform: rotate(180deg); }
    100% {
        transform: rotate(360deg); } 
    }`,
  },
  {
    id: 4,
    name: "Twins",
    markup: `<div class="twins"></div>`,
    css: `.twins {
    background: #CDAEDA;
    position: relative;
    display: block;
    height: 70px;
    width: 70px;
    border-radius: 50%; 
    }
    .twins:after, .twins:before {
        content: "";
        display: block;
        height: 70px;
        width: 70px;
        border-radius: 50%; 
    }
    .twins:after {
        width: 50px;
        height: 50px;
        background: #3498DB;
        position: absolute;
        top: 10px;
        left: 10px;
        animation: move-left 2s ease infinite; 
    }
    .twins:before {
        width: 50px;
        height: 50px;
        background: #2C3E50;
        position: absolute;
        top: 10px;
        left: 10px;
        animation: move-right 2s ease infinite; 
    }
    @keyframes move-left {
        0% {
            transform: translateX(0); }
        25% {
            transform: translateX(20px) scale(1.2); }
        50% {
            transform: translateX(-20px); }
        100% {
            transform: translateX(0); } 
    }
    @keyframes move-right {
        0% {
            transform: translateX(0); }
        25% {
            transform: translateX(-20px) scale(1.2);
            background: #3498DB; }
        50% {
            transform: translateX(20px); }
        100% {
            transform: translateX(0); } 
    }`,
  },
  {
    id: 5,
    name: "Look",
    markup: `<div class="look"></div>`,
    css: `.look {
    position: relative;
    display: block;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: #000000;
    overflow: hidden;
    border: 2px solid #000000; 
}
.look:after, .look:before {
    content: "";
    display: block;
    height: 70px;
    width: 70px;
    border-radius: 50%; 
}
.look:before {
    background-color: #ffffff;
    width: 18px;
    height: 18px;
    position: relative;
    top: 23px;
    left: 15px;
    transform-origin: center;
    animation: shrinkFull 3s linear infinite; 
}
.look:after {
    background-color: #ffffff;
    width: 18px;
    height: 18px;
    position: relative;
    top: 5px;
    left: 34px;
    transform-origin: center;
    animation: shrinkFull 3s linear infinite; 
}
@keyframes shrinkFull {
    0% {
        transform: scale(1); }
    25% {
        transform: scale(0.5); }
    50% {
        transform: scale(3); }
    100% {
        transform: scale(1); } 
}`,
  },
  {
    id: 6,
    name: "Nuclear",
    markup: `<div class="nuclear"></div>`,
    css: `.nuclear {
    position: relative;
    display: block;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background: #2980B9;
    animation: ripple 2s linear infinite; }
    .nuclear:after, .nuclear:before {
        content: "";
        display: block;
        height: 70px;
        width: 70px;
        border-radius: 50%; }
    .nuclear:before {
        background: #000;
        animation: pulse 2s ease-out infinite; }
    @keyframes ripple {
        0% {
            box-shadow: 0 0 0 0 rgba(204, 204, 204, 0.4); }
        50% {
            box-shadow: 0 0 2px 3em rgba(204, 204, 204, 0.2); }
        100% {
            box-shadow: 0 0 7em 7em rgba(204, 204, 204, 0.1); } }
    @keyframes pulse {
        0% {
            transform: scale(0.1); }
        100% {
            transform: scale(1); } 
    }`,
  },
];
