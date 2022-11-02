import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', handelSubmit);

function handelSubmit(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  let delayCounter = Number(delay.value);

  for (let position = 0; position < amount.value; position += 1) {
    createPromise(position, delayCounter)
      .then(({ position, delayCounter }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delayCounter}ms`
        );
      })
      .catch(({ position, delayCounter }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delayCounter}ms`
        );
      });
    delayCounter += Number(step.value);
  }
}

function createPromise(position, delayCounter) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delayCounter}ms`);
        // Fulfill
      } else {
        reject(`❌ Rejected promise ${position} in ${delayCounter}ms`); // Reject
      }
    }, delayCounter);
  });

  return promise;
}
