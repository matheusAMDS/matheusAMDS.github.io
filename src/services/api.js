import axios from "axios";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://www.udemy.com/api-2.0/",
  auth: {
    username: "jo98mYVNpdINa9lfEY7kN8xHdnRsww3x3xBX0ubO",
    password: "XlfyNwFEWvXjXfz2H754Abs4Wgdp9PbdME0szNg19w1bZaUmuHIHMcvNcOuF4h0c4j8fzioGcQaQ4xOfJVfTlnqBbJP2p96AqEPFDNyhl0AbQhrpDWqnPeDrZsG06R6M"
  },
});