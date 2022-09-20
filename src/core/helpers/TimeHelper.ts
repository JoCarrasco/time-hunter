interface IFullTimeObject {
  hours: string;
  minutes: string;
  seconds: string;
}

const formattingConfig = {
  minimumIntegerDigits: 2,
  useGrouping: false
}

export class TimeHelper {
  static convertNumbersToDurationString(str: string): string {
    const initialMinutes = parseFloat(str);
    let totalSeconds = initialMinutes * 60;
    let hours = Math.floor(totalSeconds / 3600) ;
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    const strMinute = minutes.toLocaleString('en-US', formattingConfig);
    const strHour = hours.toLocaleString('en-US', formattingConfig);
    const strSeconds = seconds.toLocaleString('en-US', formattingConfig);
    
    return `${strHour}:${strMinute}:${strSeconds}`;
  }

  static dateRangeToDurationString(dateA: Date, dateB: Date): string {
    return this.convertNumbersToDurationString(this.getDiffBetweenDatesInMinutes(dateA, dateB).toString());
  }

  static getDiffBetweenDatesInMinutes(dateA: Date, dateB: Date): number {
    const diff = Math.abs(dateA.getTime() - dateB.getTime());
    return Math.floor((diff/1000)/60);
  }

  static durationStringToFullTimeObject(str: string): IFullTimeObject | null {
    let isValid = false;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;


    const arrOfVals = str.split(":");
    if (!this.isTotalEmpty(arrOfVals)) {
      arrOfVals.forEach((x) => {
        if (!isNaN(parseInt(x))) {
          isValid = true;
        }
      });
      
      if (isValid) {
        const arrOfFilteredValues = arrOfVals.map((x) => {
          return parseInt(x)
        });
        if (arrOfVals.length === 3) { // Full Time Specification (Hour, Minutes and Seconds)
          hours = arrOfFilteredValues[0] || hours; // Hours
          minutes = arrOfFilteredValues[1] || minutes; // Minutes
          seconds = arrOfFilteredValues[2] || seconds; // Seconds
        } else if (arrOfVals.length === 2) { // Basic Time Specification (Hour, Minutes)
          const targetEmptyIndex = this.indexOfEmptySpace(arrOfVals);
          if (targetEmptyIndex !== -1) {
            if (targetEmptyIndex === 1){
              hours = arrOfFilteredValues[0]
            } else {
              minutes = arrOfFilteredValues[1]
            }
          } else {
            hours = arrOfFilteredValues[0]; // Hours
            minutes = arrOfFilteredValues[1]; // Minutes
          }
        } else {
          return null;
        }
      } else {
        return null;
      }

      return {
        hours: hours.toLocaleString('en-US', formattingConfig),
        minutes: minutes.toLocaleString('en-US', formattingConfig),
        seconds: seconds.toLocaleString('en-US', formattingConfig)
      }
    } else {
      return null;
    }
  }

  static isTotalEmpty(arr: string[]) {
    return arr.findIndex(x => x !== "") === -1;
  }

  static indexOfEmptySpace(arr: string[]) {
    return arr.findIndex(x => x === "");
  }

  static isOnlyNumbers(str: string): boolean {
    return !isNaN(parseFloat(str));
  }
}
