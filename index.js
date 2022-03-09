function shout(string) {
    return "Hello".toUpperCase();
  }

  function whisper(string) {
      return "Hello".toLowerCase();
  }

  function logShout(string) { 
    console.log("Hello".toUpperCase())
  } 

  function logWhisper(string) {
      console.log("Hello".toLowerCase())
  }
 
  function sayHiToHeadphonedRoommate(string) {
      switch(string) {
          case string.toLowerCase() : return "I can't hear you!" ; 
          case string.toUpperCase() : return "YES INDEED!";
          case "Let's have dinner together!" : return "I would love to!";
          }
  }