// 'use strict'
// document.addEventListener('DOMContentLoaded', function () {
//     //déclaration de variable
//     let ball = {
//         color: "green",
//         radius: 20,
//         x: 10,
//         y: 10,
//         dir: 1,
//         dirx: 0
//     };
//     let paddle = {
//         color: "black",
//         y: 680,
//         x: 600,
//         width: 150,
//         height: 20,
//         dir: 0,
//         speed: 9
//     }
//     let canvasDiv = document.getElementById('cassebrique');
//     let canvaCtx = canvasDiv.getContext('2d');
//     let limitTop, limitRight, animationID;
//     limitTop = ball.radius;

//     limitRight = canvasDiv.clientWidth

//     playGame();
//     document.addEventListener("keydown", moovePaddle)
//     /***
//      * Fonction playgame pour lancer le jeux
//      * 
//      */
//     function playGame() {
//         ball.y = paddle.y - ball.radius;
//         ball.x = paddle.x + (paddle.width / 2);
//         document.addEventListener('keypress', function (e) {
//             if (e.key == 'Enter') {
//                 displayGame();
//             }
//         })
//     }
//     /**
//      * Fonction displaygame pour réintialiser le canvas et afficher la balle
//      */
//     function displayGame() {
//         animationID = window.requestAnimationFrame(displayGame)

//         if (ball.y < limitTop) {
//             ball.dir *= -1;
//         }
//         if ((ball.y + ball.radius) > paddle.y && (ball.x + ball.radius) >= paddle.x && (ball.x - ball.radius) < (paddle.x + paddle.width)) {
//             ball.dir *= -1;

//         }
//         //Incrémentation du compteur de déplacement de la Ball
//         ball.y -= 6 * ball.dir;

//         // Realisation de mouvements bizarres
//         console.log('ball x:' + ball.x, 'paddle x:' + paddle.x)
//         if ((ball.y + ball.radius) > paddle.y && ball.x > paddle.x && ball.x < paddle.x + 15) {
//             ball.dirx = -1;
//         }
//         console.log('balle x'+ball.x,'paddle x + paddle width'+paddle.x + paddle.width);
//         if ((ball.y + ball.radius) > paddle.y && (ball.x-ball.radius) < (paddle.x + paddle.width) && (ball.x-ball.radius) > (paddle.x + paddle.width) - 15) {
//             ball.dirx = 1;
//         }

//         if (ball.dirx != 0) {
//             ball.x += 6 * ball.dirx;
//         }
//         if ((ball.x + ball.radius) < 0 || (ball.x + ball.radius) > limitRight) {
//             ball.dirx *= -1;
//         }



//         displayCircle(canvaCtx, ball.x, ball.y, ball.radius, canvasDiv, ball.color)
//     }
//     /**
//      *  
//      * @param {object} ctx
//      * @param {number} posX 
//      * @param {number} posY 
//      * @param {number} radius 
//      * @param {object} canvas 
//      * @param {string} color 
//      */
//     function displayCircle(ctx, posX, posY, radius, canvas, color) {
//         ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
//         // On dit au contexte que la couleur de remplissage est gris
//         ctx.fillStyle = '#DDDDDD';
//         // On rempli le Canvas de gris
//         ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
//         ctx.beginPath();
//         ctx.arc(posX, posY, radius, 0, Math.PI * 2);
//         ctx.fillStyle = color;
//         ctx.fill();
//         displayPaddle(ctx, paddle.x, paddle.y, paddle.width, paddle.height, paddle.color)
//     }/**
//  * 
//  * @param {object} ctx 
//  * @param {number} posX 
//  * @param {number} posY 
//  * @param {number} width 
//  * @param {number} height 
//  * @param {string} color 
//  */
//     function displayPaddle(ctx, posX, posY, width, height, color) {

//         // on dessine un rectangle dans le canvas
//         ctx.fillStyle = color;
//         ctx.fillRect(posX, posY, width, height);
//     }
//     function moovePaddle(e) {
//         // on détecte la touche et la direction puis on change les coordonnées
//         switch (e.key) {
//             case 'ArrowRight':
//                 paddle.dir = 1;
//                 break;
//             case 'ArrowLeft':
//                 paddle.dir = -1;
//                 break;

//         }
//         if (paddle.x >= 0 && (paddle.x + paddle.width) <= canvasDiv.clientWidth) {
//             paddle.x += paddle.speed * paddle.dir;
//         }
//         if (paddle.x < 0 || (paddle.x + paddle.width) > canvasDiv.clientWidth) {
//             paddle.x -= paddle.speed * paddle.dir;
//         }

//         displayCircle(canvaCtx, ball.x, ball.y, ball.radius, canvasDiv, ball.color)

//     }






// });

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };


// classe//