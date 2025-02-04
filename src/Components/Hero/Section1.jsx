import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'

const Section1 = () => {

  const [disabledName, setDisabledName] = useState(false)
  const [disabledEmail, setDisabledEmail] = useState(true)
  const [disabledcontact, setDisabledcontact] = useState(true)
  const [disabledCity, setDisabledCity] = useState(true)
  const [disabledOccupation, setDisabledOccupation] = useState(true)
  const [disabledInstagram, setDisabledInstagram] = useState(true)
  const [disabledDetails, setDisabledDetails] = useState(false)
  const [disabledInterest, setDisabledInterest] = useState(true)
  const [disableBrand, setDisabledBrand] = useState(true)
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
    interestedIn: "",
    brand: "",
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
          setDisabledCity(false)
          setTimeout(() => {
            if (cityRef.current) {
              cityRef.current.focus();
            }
          }, 500);
        }
      })
    }
  }
  const handleCity = (e) => {
    e.preventDefault()
    if (formData.city.trim().length > 0) {
      setDisabledCity(true)
      document.querySelector(".city-btn").classList.remove("btn-hover")
      document.querySelector(".step-count").textContent = "3"
      document.querySelector("#back-slide").setAttribute("data-slide", "3")
      var tl = gsap.timeline()
        .to(".form-container", {
          opacity: 0,
          duration: .5,
          onComplete: () => {
            document.querySelector(".form-container").style.display = "none"
          }
        })
        .to(".forms-pt2", {
          onStart: () => {
            document.querySelector(".form-container2").style.display = "flex"
          },
          opacity: 1,
          transform: "translateY(0%)",
          stagger: {
            amount: .4,
          },
          duration: 1,
          delay: .3
        })
        .to(".forms-light2", {
          opacity: .3,
          duration: .5,
        })

    }
  }
  // STEP 2ND HANDLERS END


  // STEP 3ND HANDLERS 

  const handleDetail = (e) => {
    e.preventDefault()
    // if (formData.weddingDetails.date.trim().length > 0 && formData.weddingDetails.venue.trim().length > 0) {
      setDisabledDetails(true)
      document.querySelectorAll(".details-btn").forEach((b) => b.classList.remove("btn-hover"))
      gsap.to(".forms-pt22", {
        opacity: 1,
        duration: 1,
        onComplete: () => {
          setDisabledInterest(false)
        }
      })
    // }
  }
  const handleAnswer = () => {
    gsap.to(".wedding-answer", {
      opacity: 0,
      duration: .3,
      onComplete: () => {
        document.querySelector(".wedding-answer").style.display = "none"
        document.querySelector(".wedding-details").style.display = "flex"
        document.querySelector(".wedding-details").style.opacity = 1
      }
    })

  }
  const handleInterest = (e) => {
    e.preventDefault()
    // if (formData.interestedIn.trim().length > 0) {
    document.querySelectorAll(".interest-btn").forEach((b) => {
      b.classList.remove("btn-hover")
    })
    setDisabledInterest(true)
    gsap.to(".forms-pt23", {
      opacity: 1,
      duration: 1,
      onComplete: () => {
        setDisabledBrand(false)
      }
    })
    // }
  }
  const handleInterestSelection = (interestedIn,e) => {
    setFormData({ ...formData, interestedIn })
    e.target.querySelector(".checkbox").style.display = "block"
  }
  const handleBrand = (e) => {
    e.preventDefault()
    // if (formData.interestedIn.trim().length > 0) {
    document.querySelectorAll(".brand-btn").forEach((b) => {
      b.classList.remove("btn-hover")
    })
    setDisabledBrand(true)
    // }
  }
  const handleBrandSelection = (brand,e) => {
    setFormData({ ...formData, brand })
    e.target.querySelector(".checkbox").style.display = "block"
  }


  const handleInfoHover = (e) => {
    document.querySelector("#info-container").style.color = "#e4d5ba";
    document.querySelector("#info-container").style.backgroundColor = "#393939";
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
      .to(".corner ,#banner-btm", {
        opacity: 0,
        duration: .5,
        onStart: () => {
          document.querySelector("#back-btn").style.display = "block"
        },
        onComplete: () => {
          document.querySelector("#banner-btm").style.display = "none"
        }
      }, "a")
      .to(".banner-card", {
        onStart: function () {
          gsap.set("#banner-card-container", { display: "flex" })
        },
        opacity: 1,
        transform: "translateY(0%)",
        stagger: {
          amount: .25,
        },
        duration: .8,
      })
      .to(".card-content,#que1,#back-btn", {
        opacity: 1,
        duration: 1,
      })
  }
  const handleBack = (e) => {
    if (e.target.dataset.slide == 1) {

      var tl = gsap.timeline()
      tl
        .to(".card-content,#que1", {
          opacity: 0,
          duration: .5,
          onComplete: () => {
            document.querySelector("#back-btn").style.display = "none"
          }
        })
        .to(".banner-card", {
          opacity: 0,
          transform: "translateY(150%)",
          stagger: {
            amount: -.1,
          },
          duration: .8,
          onComplete: function () {
            gsap.set("#banner-card-container", { display: "none" })
          },
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
        .to("#back-btn", {
          opacity: 1,
          duration: 1
        })
    }
    if (e.target.dataset.slide == 2) {
      document.querySelector(".step-count").textContent = "1"
      document.querySelector("#back-slide").setAttribute("data-slide", "1")
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
        interestedIn: "",
        brand: "",
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
        .to("#question1", {
          opacity: 1,
          duration: .5,
        }, "a")
        .to("#cards", {
          opacity: 1,
          duration: .5
        }, "a")
    }
    if (e.target.dataset.slide == 3) {
      document.querySelector(".step-count").textContent = "2"
      document.querySelector("#back-slide").setAttribute("data-slide", "2")
      setDisabledCity(false)
      setFormData({ ...formData, city: "" })
      var tl = gsap.timeline()
        .to(".forms-pt2", {
          opacity: 0,
          transform: "translateY(500%)",
          stagger: {
            amount: -.4,
          },
          duration: 1,
          onComplete: () => {
            document.querySelector(".form-container2").style.display = "none"
            document.querySelector(".form-container").style.display = "flex"
          },
        })
        .to(".form-container", {
          opacity: 1,
          duration: .5,
        })
    }
  }

  useEffect(() => {
    document.querySelectorAll(".banner-card").forEach(function (card) {
      card.addEventListener("mouseenter", function () {
        document.querySelectorAll(".banner-card").forEach(function (c) {
          c.style.opacity = .5
        })
        card.style.opacity = 1
      })
      card.addEventListener("mouseleave", function () {
        document.querySelectorAll(".banner-card").forEach(function (c) {
          c.style.opacity = 1
        })
      })
      card.addEventListener("click", function () {
        document.querySelector(".step-count").textContent = "2"
        document.querySelector("#back-slide").setAttribute("data-slide", "2")
        var category = card.getAttribute("data-category")
        setFormData({ ...formData, category: category })
        var tl = gsap.timeline()
        tl
          .to("#cards", {
            opacity: 0,
            duration: .5
          }, "a")
          .to("#question1", {
            opacity: 0,
            duration: .5,
            onComplete: () => {
              document.querySelector("#subtitle").style.display = "block"
            }
          }, "a")
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
          })
          .to(".input-box,#question2,#subtitle", {
            opacity: 1,
            duration: .5
          })
          .to(".forms-light", {
            opacity: .3,
            duration: .5,
            onComplete:()=>{
             nameRef.current.focus()
            }
          })
      })
    })

  }, [])

  useEffect(() => {
    var tl2 = gsap.timeline()
    tl2
      .to(".hero-banner", {
        transform: "translateY(0%)",
        opacity: 1,
        duration: .8,
        delay: .2
      })
      .to(".home-section1", {
        padding: "1vw",
        duration: .5,
      }, "s")
      .to(".hero-banner", {
        borderRadius: "20px",
        opacity: 1,
        duration: .5,
      }, "s")
      .to(".corner,#banner-content,#info-container", {
        opacity: 1,
        duration: .5
      })
  }, [])

  return (
    <div className='home-section1'>
      <div className="hero-banner">
        <span id='back-btn' onClick={(e) => handleBack(e)}><i data-slide="1" id='back-slide' className="ri-arrow-left-line"></i></span>
        <div id='banner-content'>
          <img src="/images/fdci.png" alt="" />
          <p>Is back with another edition
            and it's bigger than ever.</p>
          <div onClick={handleClick} id='banner-btn'>
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
        <img className='corner' id='corner1' src="/images/asset1.png" alt="" />
        <img className='corner' id='corner2' src="/images/asset2.png" alt="" />
        <div id='banner-card-container'>
          <div id='que1'>
            <p id='question1'>Are you the bride, groom, or a family member?</p>
            <p id='question2'>The registration details for the FDCI Manifest Wedding Weekend 2025 .</p>
            <p id='count'>0<span className='step-count'>1</span> <span id='que-count'> /03</span></p>
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
                      <input type="text" disabled={disabledName} ref={nameRef}  id='namefield' name='name' onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.name} required maxLength="20" placeholder='Enter your first name' />
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
                        <input type="text" name='contact' ref={contactRef} id='contactfield'  disabled={disabledcontact} required onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.contact} placeholder='Enter your contact number' />
                        <button className='done-btn contact-btn btn-hover' disabled={disabledcontact}>
                          <p>done</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <form action="" autoComplete='off'  onSubmit={handleEmail} className=' forms-light form3'>
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
                      <p>Please enter your occupation.</p>
                      <div className='input-wrapper'>
                        <input type="text" name='occupation' ref={occupationRef} id='occupationfield' required disabled={disabledOccupation} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.occupation} placeholder='Enter your occupation' />
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
                      <p>What’s your Instagram handle?</p>
                      <div className='input-wrapper'>
                        <input type="text" name='instagram' ref={instaRef} id='instagramfield' required disabled={disabledInstagram} onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.instagram} placeholder='Enter your Instagram handle' />
                        <button className='done-btn instagram-btn btn-hover' disabled={disabledInstagram}>
                          <p>done</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <form action="" autoComplete='off'  onSubmit={handleCity} className='forms forms-light form6'>
                <div className='input-container'>
                  <div className='input-box'>
                    <p>Where are you located?</p>
                    <div className='input-wrapper'>
                      <input type="text" ref={cityRef} disabled={disabledCity} required placeholder='Enter your city' name='city' id='cityfield' onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })} value={formData.city
                      } />
                      <button className='done-btn city-btn btn-hover' disabled={disabledCity}>
                        <p>done</p>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='form-container2'>
              <form action="" autoComplete='off' onSubmit={handleDetail} className='forms-pt2 forms-pt21'>
                <div className='input-container'>
                  <div className='input-box2'>
                    <p>Are you or someone you know getting married?</p>
                    <div className='input-wrapper data-picker-wrapper'>
                      <div className='wedding-answer'>
                        <div onClick={handleAnswer} className='done-btn details-btn btn-hover option-btn' disabled={disabledDetails}>
                          <p>If yes, please share the details!</p>
                        </div>
                        <button className='done-btn details-btn btn-hover option-btn' disabled={disabledDetails}>
                          <p>No</p>
                        </button>
                      </div>
                      <div className='wedding-details'>
                        <div className='wedding-details-input'>
                          <div className='done-date-picker details-btn btn-hover'>
                            <p>Wedding Date: </p>
                            <input className='' type="date" value={formData.weddingDetails.date}
                              onChange={(e) =>
                                setFormData((prevData) => ({
                                  ...prevData,
                                  weddingDetails: {
                                    ...prevData.weddingDetails,
                                    date: e.target.value,
                                  },
                                }))
                              } name="date" id="" />
                          </div>
                          <div className='done-date-picker details-btn btn-hover' >
                            <p>Wedding Venu: </p>
                            <input className='' type="text" name="venue" id="" onChange={(e) =>
                              setFormData((prevData) => ({
                                ...prevData,
                                weddingDetails: {
                                  ...prevData.weddingDetails,
                                  venue: e.target.value,
                                },
                              }))
                            } value={formData.weddingDetails.venue} placeholder='Enter Wedding Venue' />
                          </div>
                        </div>
                        <button className='done-btn name-btn btn-hover'>
                          <p>done</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <form action="" autoComplete='off' onSubmit={handleInterest} className='forms-pt2 forms-light2 forms-pt22'>
                <div className='input-container'>
                  <div className='input-box2'>
                    <p>What excites you the most when it comes to weddings?</p>
                    <div className='input-wrapper btn-wrap-mobile'>
                      <button className='done-btn interest-btn btn-hover option-btn ' onClick={(e) => handleInterestSelection("Wedding Wear Designers",e)} disabled={disabledInterest}>
                        <p>Wedding Wear Designers <i class="ri-checkbox-circle-fill checkbox"></i></p> 
                      </button>
                      <button className='done-btn interest-btn btn-hover option-btn' onClick={(e) => handleInterestSelection("Fine Jewellery",e)} disabled={disabledInterest}>
                        <p>Fine Jewellery <i class="ri-checkbox-circle-fill checkbox"></i></p>
                      </button>
                      <button className='done-btn interest-btn btn-hover option-btn' onClick={(e) => handleInterestSelection("Trousseau & Wedding Services",e)} disabled={disabledInterest}>
                        <p>Trousseau & Wedding Services <i class="ri-checkbox-circle-fill checkbox"></i></p>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <form action="" autoComplete='off' onSubmit={handleBrand} className='forms-pt2 forms-light2 forms-pt23'>
                <div className='input-container'>
                  <div className='input-box2'>
                    <p>What excites you the most when it comes to weddings?</p>
                    <div className='input-wrapper btn-wrap-mobile'>
                      <button className='done-btn brand-btn btn-hover option-btn' onClick={(e) => handleBrandSelection("Brand 1",e)} disabled={disableBrand}>
                        <p>Brand 1 <i class="ri-checkbox-circle-fill checkbox"></i></p>
                      </button>
                      <button className='done-btn brand-btn btn-hover option-btn' onClick={(e) => handleBrandSelection("Brand 2",e)} disabled={disableBrand}>
                        <p>Brand 2 <i class="ri-checkbox-circle-fill checkbox"></i></p>
                      </button>
                      <button className='done-btn brand-btn btn-hover option-btn' onClick={(e) => handleBrandSelection("Brand 3",e)} disabled={disableBrand}>
                        <p>Brand 3 <i class="ri-checkbox-circle-fill checkbox"></i></p>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1