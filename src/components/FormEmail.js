import { useRef, useState } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
//ANIMATION
import { photoAnim } from "../animation";

import send from "../img/send.png";
import plane from "../img/plane.png";

const FormEmail = () => {
  const [emailSend, setEmailSend] = useState(false);
  const form = useRef();

  const emailSended = () => {
    setEmailSend(true);
    setTimeout(() => {
      setEmailSend(false);
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mr54snt",
        "template_gyg19lt",
        form.current,
        "user_8JZzvC60fPJkbiV7JOkDu"
      )
      .then(
        (result) => {
          emailSended();
        },
        (error) => {}
      );
    e.target.reset();
  };

  return (
    <FormEmailStyled variants={photoAnim}>
      <form ref={form} onSubmit={(e) => sendEmail(e)}>
        <div className="containerForm">
          <div className="name-input">
            <label>Name</label>
            <input type="text" name="name" required></input>
          </div>
          <div className="phone-email">
            <div>
              <label>Phone</label>
              <input type="text" name="phone"></input>
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" required></input>
            </div>
          </div>
        </div>
        <div className="textbutton">
          <div>
            <label>Message</label>
            <textarea name="message" required></textarea>
            <button>
              <img src={send} alt="send" />
            </button>
          </div>
        </div>
      </form>
      {emailSend && (
        <div className="plane">
          <h3>Sent successfully!</h3>
          <img src={plane} alt="plane"></img>
        </div>
      )}
    </FormEmailStyled>
  );
};

const FormEmailStyled = styled(motion.div)`
  width: 50rem;
  height: 35rem;
  display: flex;
  border-right: 1px solid grey;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.7rem;
    label {
      color: #ffffff;
    }
    input {
      background: none;
      border: none;
      border-bottom: 1px solid #747474;
      color: #ffffff;
      font-size: 1.3rem;
      margin-top: 1rem;
    }
    // #7a948b;
    input:focus {
      outline: none;
    }
    button {
      align-self: flex-end;
      width: 6rem;
      height: 7rem;
    }
    h3 {
      border-bottom: 1px solid grey;
    }

    .containerForm {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 18rem;
      padding: 0rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .name-input {
    display: flex;
    flex-direction: column;
    width: 40rem;
    input {
      width: 40rem;
    }
  }

  .phone-email {
    display: flex;
    flex-direction: row;
    width: 45rem;
    justify-content: space-around;
    margin-bottom: 1rem;
    input {
      width: 18rem;
    }
    div {
      display: flex;
      flex-direction: column;
    }
  }

  .textbutton {
    height: 10rem;
    display: flex;
    flex-direction: column;

    width: 40rem;
    textarea {
      resize: none;
      background: none;
      border: none;
      border: 1px solid #4d4d4d;
      border-radius: 10px;
      color: white;
      font-size: 1.3rem;
      outline: none;
      padding: 5px;
      width: 40rem;
      margin-top: 5px;
    }
    div {
      display: flex;
      flex-direction: column;
    }
    button {
      border: none;
      background: none;
    }
    img {
      transform: rotate(90deg);
      background: #fff;
      border-radius: 50%;
      transition: ease 0.7s;
    }
    img:hover {
      background: #23d997;
    }
  }
  .plane {
    position: absolute;
    top: 5rem;
    text-align: center;
    h3 {
      font-size: 2rem;
      color: #23d997;
    }
    img {
      /* Start the shake animation and make the animation last for 0.5 seconds */
      animation: shake 0.5s;

      /* When the animation is finished, start again */
      animation-iteration-count: infinite;
    }

    @keyframes shake {
      0% {
        transform: translate(1px, 1px) rotate(0deg);
      }
      10% {
        transform: translate(-1px, -2px) rotate(-1deg);
      }
      20% {
        transform: translate(-3px, 0px) rotate(1deg);
      }
      30% {
        transform: translate(3px, 2px) rotate(0deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(1deg);
      }
      50% {
        transform: translate(-1px, 2px) rotate(-1deg);
      }
      60% {
        transform: translate(-3px, 1px) rotate(0deg);
      }
      70% {
        transform: translate(3px, 1px) rotate(-1deg);
      }
      80% {
        transform: translate(-1px, -1px) rotate(1deg);
      }
      90% {
        transform: translate(1px, 2px) rotate(0deg);
      }
      100% {
        transform: translate(1px, -2px) rotate(-1deg);
      }
    }
  }

  @media screen and (max-width: 500px) {
    border: none;
    height: 60vh;
    width: 100%;

    justify-content: center;
    align-items: center;
    form {
      width: 34rem;
      div {
        align-items: center;
        justify-content: center;
      }
      .name-input {
        input {
          width: 30rem;
          text-align: center;
        }
      }
      .phone-email {
        flex-direction: column;
        label {
          margin-top: 1rem;
        }
        input {
          width: 30rem;
          text-align: center;
        }
      }
      .textbutton {
        height: 14rem;

        img {
        }
        textarea {
          width: 28rem;
        }
        button {
          align-items: center;
          justify-content: center;

          align-self: center;
          display: flex;
          align-items: center;
          img {
            align-self: center;
          }
        }
        div {
          justify-content: center;
          align-items: center;
        }
      }
    }
    .plane {
      top: -3rem;
      background: #3838389b;
      border-radius: 20px;
      width: 15rem;
      backdrop-filter: blur(10px);
      transition: ease 0.7s;
    }
  }
`;

export default FormEmail;
