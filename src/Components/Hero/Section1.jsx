import gsap from 'gsap';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

const Section1 = ({ registerBtn }) => {

  const [disabledName, setDisabledName] = useState(false)
  const [disabledEmail, setDisabledEmail] = useState(true)
  const [disabledcontact, setDisabledcontact] = useState(true)
  const [disabledCity, setDisabledCity] = useState(true)
  const [disabledOccupation, setDisabledOccupation] = useState(true)
  const [disabledInstagram, setDisabledInstagram] = useState(true)
  const [disabledDetails, setDisabledDetails] = useState(false)
  const [disabledInterest, setDisabledInterest] = useState(true)
  const [disableBrand, setDisabledBrand] = useState(true)
  const [disableCategory, setDisabledCategory] = useState(true)
  const [formData, setFormData] = useState({
    category: '',
    name: '',
    contact: '',
    email: '',
    city: '',
    occupation: "",
    instagram: "",
    weddingDetails: {
      date: "",
      venue: "",
    },
    interestedIn: [],
    brand: [],
  })


  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const emailRef = useRef(null);
  const occupationRef = useRef(null);
  const instaRef = useRef(null);
  const cityRef = useRef(null);


  // STEP 2ND HANDLERS
  const handleName = (e) => {
    e.preventDefault()
    if (formData.name.trim().length > 0) {
      nameRef.current.blur()
      setDisabledName(true)
      document.querySelector(".name-btn").classList.remove("btn-hover")
      gsap.to(".form2", {
        opacity: 1,
        duration: .5,
        onComplete: () => {
          setDisabledcontact(false)
          setTimeout(() => {
            if (contactRef.current) {
              contactRef.current.focus();
            }
          }, 500);
        }
      })
    }
  }
  const handleContact = (e) => {
    e.preventDefault()
    if (formData.contact.trim().length > 0) {
      contactRef.current.blur();
      setDisabledcontact(true)
      document.querySelector(".contact-btn").classList.remove("btn-hover")
      gsap.to(".form3", {
        opacity: 1,
        duration: .5,
        onComplete: () => {
          setDisabledEmail(false)
          setTimeout(() => {
            if (emailRef.current) {
              emailRef.current.focus();
            }
          }, 500);
        }
      })
    }
  }
  const handleEmail = (e) => {
    e.preventDefault()
    if (formData.email.trim().length > 0) {
      emailRef.current.blur();
      setDisabledEmail(true)
      document.querySelector(".email-btn").classList.remove("btn-hover")
      gsap.to(".form4", {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          setDisabledOccupation(false)
          setTimeout(() => {
            if (occupationRef.current) {
              occupationRef.current.focus();
            }
          }, 500);
        }
      })
    }

  }
  const handleOccupation = (e) => {
    e.preventDefault()
    if (formData.occupation.trim().length > 0) {
      occupationRef.current.blur()
      setDisabledOccupation(true)
      document.querySelector(".occupation-btn").classList.remove("btn-hover")
      gsap.to(".form5", {
        opacity: 1,
        duration: .5,
        onComplete: () => {
          setDisabledInstagram(false)
          setTimeout(() => {
            if (instaRef.current) {
              instaRef.current.focus();
            }
          }, 500);
        }
      })
    }
  }
  const handleInstagram = (e) => {
    e.preventDefault()
    if (formData.instagram.trim().length > 0) {
      instaRef.current.blur();
      setDisabledInstagram(true)
      document.querySelector(".instagram-btn").classList.remove("btn-hover")
      gsap.to(".form6", {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          setDisabledCategory(false)
          setTimeout(() => {
            if (cityRef.current) {
              cityRef.current.focus();
            }
          }, 500);
        }
      })
    }
  }
  const handleCategory = (category, e) => {

    e.preventDefault()
    setFormData({ ...formData, category: category })
    e.target.querySelector(".checkbox").style.display = "block"
    document.querySelectorAll(".cat-btn").forEach((b) => {
      b.classList.remove("btn-hover")
    })
    setDisabledCategory(true)

    var tl = gsap.timeline()
      .to(".form-container", {
        opacity: 0,
        duration: .5,
        onComplete: () => {
          document.querySelector(".form-container").style.display = "none"
        }
      }, "a")
      .to("#que1,#subtitle,#back-btn", {
        opacity: 0,
        duration: .5,
      }, "a")
      .to(".forms", {
        onStart: () => {
          document.querySelector(".submit-slide").style.display = "flex"
        },
        opacity: 1,
        duration: 1,
        delay: .3
      })


    var countR = document.querySelector("#redirectCount")
    var interval = setInterval(() => {
      countR.textContent = Number(countR.textContent) - 1
      if (Number(countR.textContent) === 0) {
        clearInterval(interval);
        setTimeout(() => {
          window.location.reload()
        }, 2800);
      }
    }, 1000);
  }


  const handleInfoHover = (e) => {
    document.querySelector("#info-container").style.color = "#e4d5ba";
    document.querySelector("#info-container").style.backgroundColor = "#722c7338";
  }
  const handleInfoLeave = (e) => {
    document.querySelector("#info-container").style.color = "transparent";
    document.querySelector("#info-container").style.backgroundColor = "transparent";
  }

  const handleClick = (e) => {
    var tl = gsap.timeline()
    tl
      .to("#banner-content", {
        y: -50,
        opacity: 0,
        duration: .5
      }, "a")
      .to(".corner ,#banner-btm ,#scrollformore", {
        opacity: 0,
        duration: .5,
        onStart: () => {
          document.querySelector("#back-btn").style.display = "block"
        },
        onComplete: () => {
          document.querySelector("#banner-btm").style.display = "none"
        }
      }, "a")
      .to("#que1,#back-btn", {
        onStart: function () {
          document.querySelector("#subtitle").style.display = "block"
          gsap.set("#banner-card-container", { display: "flex" })
        },
        opacity: 1,
        duration: 1,
        onComplete: () => {
          document.querySelector("#subtitle").style.display = "block"
        }
      }, "b")
      .to(".forms", {
        onStart: () => {
          document.querySelector(".form-container").style.display = "flex"
        },
        opacity: 1,
        transform: "translateY(0%)",
        stagger: {
          amount: .4,
        },
        duration: 1,
        delay: .3
      }, "b")
      .to(".input-box,#question2,#subtitle", {
        opacity: 1,
        duration: .5
      })
      .to(".forms-light", {
        opacity: .3,
        duration: .5,
        onComplete: () => {
          nameRef.current.focus()
        }
      })


  }
  const handleBack = (e) => {
    if (e.target.dataset.slide == 1) {
      setDisabledName(false)
      setDisabledEmail(true)
      setDisabledcontact(true)
      setDisabledOccupation(true)
      setDisabledInstagram(true)
      setDisabledCity(true)
      setFormData({
        category: '',
        name: '',
        contact: '',
        email: '',
        city: '',
        occupation: "",
        instagram: "",
        weddingDetails: {
          date: "",
          venue: "",
        },
        interestedIn: [],
        brand: [],
      })

      var tl = gsap.timeline()
      tl
        .to(".input-box,#question2,#subtitle", {
          opacity: 0,
          duration: .5,
          onComplete: () => {
            document.querySelector("#subtitle").style.display = "none"
          }
        })
        .to(".forms", {
          opacity: 0,
          transform: "translateY(500%)",
          stagger: {
            amount: -.4,
          },
          duration: 1,
          onComplete: () => {
            document.querySelector(".form-container").style.display = "none"
          },
        })
        .to(".card-content,#que1", {
          opacity: 0,
          duration: .5,
          onComplete: () => {
            document.querySelector("#back-btn").style.display = "none"
            document.querySelector("#banner-card-container").style.display = "none"
          }
        })
        .to("#banner-content", {
          y: 0,
          opacity: 1,
          duration: .5
        }, "a")
        .to(".corner", {
          opacity: 1,
          duration: .5
        }, "a")
    }
 
  }
  //card click animation
  // useEffect(() => {
  //   document.querySelectorAll(".banner-card").forEach(function (card) {
  //     card.addEventListener("mouseenter", function () {
  //       document.querySelectorAll(".banner-card").forEach(function (c) {
  //         c.style.opacity = .5
  //       })
  //       card.style.opacity = 1
  //     })
  //     card.addEventListener("mouseleave", function () {
  //       document.querySelectorAll(".banner-card").forEach(function (c) {
  //         c.style.opacity = 1
  //       })
  //     })
  //     card.addEventListener("click", function () {
  //       document.querySelector(".step-count").textContent = "2"
  //       document.querySelector("#back-slide").setAttribute("data-slide", "2")
  //       var category = card.getAttribute("data-category")
  //       setFormData({ ...formData, category: category })
  //       var tl = gsap.timeline()
  //       tl
  //         .to("#cards", {
  //           opacity: 0,
  //           duration: .5
  //         }, "a")
  //         .to("#question1", {
  //           opacity: 0,
  //           duration: .5,
  //           onComplete: () => {
  //             document.querySelector("#subtitle").style.display = "block"
  //           }
  //         }, "a")
  //         .to(".forms", {
  //           onStart: () => {
  //             document.querySelector(".form-container").style.display = "flex"
  //           },
  //           opacity: 1,
  //           transform: "translateY(0%)",
  //           stagger: {
  //             amount: .4,
  //           },
  //           duration: 1,
  //           delay: .3
  //         })
  //         .to(".input-box,#question2,#subtitle", {
  //           opacity: 1,
  //           duration: .5
  //         })
  //         .to(".forms-light", {
  //           opacity: .3,
  //           duration: .5,
  //           onComplete: () => {
  //             nameRef.current.focus()
  //           }
  //         })
  //     })
  //   })

  // }, [])

  //loading anim
  useEffect(() => {
    var tl2 = gsap.timeline()

    tl2
      .to(".corner", {
        opacity: 1,
        duration: .5
      })
      .to("#banner-content img", {
        opacity: 1,
        duration: .5
      })
      .to("#banner-content p", {
        opacity: 1,
        stagger: {
          amount: .2
        },
        duration: .2
      })
      .to("#line .inner", {
        height: "100%",
        duration: .2
      })
      .to("#info-container", {
        opacity: 1,
        duration: .2
      }, "b")
      .fromTo("#scrollformore", {
        opacity: 0
      }, {
        opacity: 1,
        duration: .2,
      }, "b")
      .fromTo(registerBtn.current, {
        opacity: 0
      }, {
        opacity: 1,
        duration: .2,
      }, "b")

  }, [])

  useEffect(() => {
    document.querySelectorAll(".anime").forEach(function (e) {
      var clutter = ""
      e.textContent.split("").forEach(function (l) {
        clutter += `<span>${l === " " ? "&nbsp;" : l}</span>`;
      })
      e.innerHTML = clutter
    })

    setTimeout(() => {
      setInterval(() => {
        gsap.fromTo(".ptop span", {
          y: "-11%",
        }, {
          y: "-100%",
          duration: 1,
          stagger: {
            amount: .4
          },
        })
        gsap.fromTo(".pbtm span", {
          y: "-11%",
        }, {
          y: "-100%",
          duration: 1,
          stagger: {
            amount: .4
          },
        })
      }, 3000);
    }, 2000);


    // var ps = document.querySelectorAll(".anime")
    // var index = 0
    // gsap.to(ps[index].querySelectorAll("span"), {
    //   y: "-100%",
    //   duration: 1,
    //   stagger: {
    //     amount: .3
    //   },
    //   delay: 10,
    //   onComplete: function () {
    //     gsap.set(ps[index].querySelectorAll("span"), { y: "100%" })
    //   }
    // })
    // gsap.to(".pbtm span", {
    //   y: "-100%",
    //   duration: 1,
    //   stagger: {
    //     amount: .3
    //   },
    //   delay: 10
    // })
  }, [])

  return (
    <div className='home-section1'>
      <div className="hero-banner">
        <span id='back-btn' onClick={(e) => handleBack(e)}><i data-slide="1" id='back-slide' className="ri-arrow-left-line"></i></span>
        <div id='banner-content'>
          <Image width={1000} height={1000} id='logo-main' src="/images/fdci.png" alt="" data-scroll data-scroll-speed='.2' />
          <div className='banner-text' data-scroll data-scroll-speed='.1'>
            <p id='p1'>Is back with another edition <br />
              and it's bigger than ever.</p>
            <div id="line">
              <div className="inner"></div>
            </div>
            <p id='p2'>2nd — 3rd August, 2025 <br />
              Taj Palace, New Delhi</p>
          </div>
          <div ref={registerBtn} onClick={handleClick} id='banner-btn'>
            <h6>Register now</h6>
            <span id='banner-btn-cir'>
              <span id='icon-btn'><i className="ri-arrow-right-up-line"></i></span>
            </span>
          </div>
        </div>
        <div id='banner-btm'>
          <div id='info-container'>
            <span onMouseEnter={handleInfoHover} onMouseLeave={handleInfoLeave} id='info-icon'>
              <i className="ri-info-i"></i>
            </span>
            <p>This website does not collect personal data and does not use cookies, as the settings are saved in your own browser.</p>
          </div>
        </div>
        <div id='scrollformore'>
          <p className='ptop anime'>Scroll to know more</p>
          <p className='pbtm anime'>Scroll to know more</p>
        </div>
        <img className='corner' id='corner1' src="/images/asset1.png" alt="" />
        <img className='corner' id='corner2' src="/images/asset2.png" alt="" />
        <div id='banner-card-container'>
          <div id='que1'>
            <p id='question1'>Are you the bride, groom, or a family member?</p>
            <p id='question2'>The registration details for the FDCI Manifest Wedding Weekend 2025 .</p>
            <p id='count'>0<span className='step-count'>1</span> <span id='que-count'> /02</span></p>
          </div>
          <p id='subtitle'>This step is one-time setup, but you can reset it on your dashboard.</p>

          <div className='card-wrapper'>
            <div id='cards'>
              <div className="banner-card" data-category="bride">
                <div className='card-content'>
                  <p>bride</p>
                  <img src="/images/bride.png" alt="" />
                  <h3>Explore my website with moderate animations, a customized dashboard, and more information about me.</h3>
                </div>
              </div>
              <div className="banner-card" data-category="groom">
                <div className='card-content'>
                  <p>groom</p>
                  <img src="/images/groom.png" alt="" />
                  <h3>Explore my website with moderate animations, a customized dashboard, and more information about me.</h3>
                </div>
              </div>
              <div className="banner-card" data-category="family">
                <div className='card-content'>
                  <p>family</p>
                  <img src="/images/family.png" alt="" />
                  <h3>Explore my website with moderate animations, a customized dashboard, and more information about me.</h3>
                </div>
              </div>
            </div>
            <div className='form-container'>
              <form action="" autoComplete='off' onSubmit={handleName} className='forms form1'>
                <div className='input-container'>
                  <div className='input-box'>
                    <p>What's your name?</p>
                    <div className='input-wrapper'>
                      <input type="text" disabled={disabledName} ref={nameRef} id='namefield' name='name' onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.name} required maxLength="20" placeholder='Enter your first name' />
                      <button className='done-btn name-btn btn-hover' disabled={disabledName} >
                        <p>done</p>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className='input-half forms'>
                <form action="" autoComplete='off' onSubmit={handleContact} className=' forms-light form2'>
                  <div className='input-container'>
                    <div className='input-box'>
                      <p>Drop your contact number so we can stay in touch!</p>
                      <div className='input-wrapper'>
                        <input type="text" name='contact' ref={contactRef} id='contactfield' disabled={disabledcontact} required onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.contact} placeholder='Enter your contact number' />
                        <button className='done-btn contact-btn btn-hover' disabled={disabledcontact}>
                          <p>done</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <form action="" autoComplete='off' onSubmit={handleEmail} className=' forms-light form3'>
                  <div className='input-container'>
                    <div className='input-box'>
                      <p>Please enter your email address</p>
                      <div className='input-wrapper'>
                        <input type="email" ref={emailRef} placeholder='Enter your email ID' name='email' id='emailfield' required disabled={disabledEmail} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.email} />
                        <button className='done-btn email-btn btn-hover' disabled={disabledEmail}>
                          <p>done</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className='input-half forms'>
                <form action="" autoComplete='off' onSubmit={handleOccupation} className=' forms-light form4'>
                  <div className='input-container'>
                    <div className='input-box'>
                      <p>Please enter your Pincode</p>
                      <div className='input-wrapper'>
                        <input type="text" name='occupation' ref={occupationRef} id='occupationfield' required disabled={disabledOccupation} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.occupation} placeholder='Enter your pincode' />
                        <button className='done-btn occupation-btn btn-hover' disabled={disabledOccupation}>
                          <p>done</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <form action="" autoComplete='off' onSubmit={handleInstagram} className=' forms-light form5'>
                  <div className='input-container'>
                    <div className='input-box'>
                      <p>Share your social media handle?</p>
                      <div className='input-wrapper'>
                        <input type="text" name='instagram' ref={instaRef} id='instagramfield' required disabled={disabledInstagram} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.instagram} placeholder='Enter your social media handle' />
                        <button className='done-btn instagram-btn btn-hover' disabled={disabledInstagram}>
                          <p>done</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <form action="" autoComplete='off' className='forms forms-light form6'>
                <div className='input-container'>
                  <div className='input-box'>
                    <p>Are you the bride, groom, a family member, or other?</p>
                    <div className='input-wrapper'>
                      <button className='done-btn cat-btn btn-hover option-btn' onClick={(e) => handleCategory("Bride", e)} disabled={disableCategory}>
                        <p>Bride<i className="ri-checkbox-circle-fill checkbox"></i></p>
                      </button>
                      <button className='done-btn cat-btn btn-hover option-btn' onClick={(e) => handleCategory("Groom", e)} disabled={disableCategory}>
                        <p>Groom<i className="ri-checkbox-circle-fill checkbox"></i></p>
                      </button>
                      <button className='done-btn cat-btn btn-hover option-btn' onClick={(e) => handleCategory("Family Member", e)} disabled={disableCategory}>
                        <p>Family Member<i className="ri-checkbox-circle-fill checkbox"></i></p>
                      </button>
                      <button className='done-btn cat-btn btn-hover option-btn' onClick={(e) => handleCategory("Other", e)} disabled={disableCategory}>
                        <p>Other<i className="ri-checkbox-circle-fill checkbox"></i></p>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='submit-slide'>
              <i className="ri-checkbox-circle-fill"></i>
              <h4>Thank you for showing interest</h4>
              <p>You will be redirected to the homepage in <span id='redirectCount'>5</span> seconds...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1