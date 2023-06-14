let displayWatch = document.getElementById("watch-display");
let value;

let _stop = document.querySelector("#watch-stop");
let _interval;
let flag = false;

class StopWatch {
  constructor(displayWatch, value, _stop, _interval, flag) {
    this.displayWatch = displayWatch;
    this.value = value;
    this._stop = _stop;
    this._interval = _interval;
    this.flag = flag;
  }
  startWatch() {
    const self = this;
    if (this.flag === false) {
      this.value = 0;
      this.displayWatch.innerHTML = this.value;
      this._interval = setInterval(() => {
        this.value++;
        this.displayWatch.innerHTML = this.value;
      }, 1000);
    } else {
      this._interval = setInterval(() => {
        this.value++;
        this.displayWatch.innerHTML = this.value;
      }, 1000);
    }
    return this._interval;
  }

  pauseWatch() {
    window.clearInterval(this._interval);
    this.flag = true;
  }

  stop() {
    window.clearInterval(this._interval);
    this.flag = false;
    // console.log(typeof(window.clearInterval(_interval)));
    // console.log(typeof(value));
  }

  reset() {
    location.reload();
  }
}

const stopWatch = new StopWatch(displayWatch, value, _stop, _interval, flag);
