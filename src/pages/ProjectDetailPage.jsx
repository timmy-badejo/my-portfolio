import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Tilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ProjectDetailPage.css';
import BackToHomeButton from '../components/BackToHomeButton';
import kvdstThumb from '../assests/KVDST LOGO.png';
import RonZalkoWebDesign from '../assests/Ron Zalko web design.jpg';
import ronWire1 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_01.jpg';
import ronWire2 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_02.jpg';
import ronWire3 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_03.jpg';
import ronWire4 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_04.jpg';
import ronWire5 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_05.jpg';
import ronWire6 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_06.jpg';
import ronWire7 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_07.jpg';
import ronWire8 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_08.jpg';
import ronWire9 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_09.jpg';
import ronWire10 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_10.jpg';
import ronWire11 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_11.jpg';
import ronWire12 from '../assests/Ron-Zalko-Web-Design-Wireframe_Page_12.jpg';
import melodyBeats from '../assests/MelodyCard1.jpg';
import melodyBeatsAlt from '../assests/MelodyCard2.jpg';
import melody3d from '../assests/3D for melody.png';
import melodyBeatsLogo from '../assests/Beats for melody.png';
import melodyBusiness from '../assests/Buisness name for melody.png';
import melodyEntertainment from '../assests/Entertainment Text Layer for melody.png';
import melodyLogoBlue from '../assests/Melody Logo 2 blue for melody.png';
import melodyLogoPoster from '../assests/Melody Logo poster cards for melody.png';
import melodyCard1 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card for melody.jpg';
import melodyCard2 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card2 for melody.jpg';
import melodyCard3 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card3 for melody.jpg';
import melodyCard4 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card4 for melody.jpg';
import melodyCard5 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card5 for melody.jpg';
import melodyCard6 from '../assests/Yomi-Badejo Timilehin_InDesign Exploration Buisness Card6 for melody.jpg';
import melodyPost1 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards for melody.jpg';
import melodyPost2 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards2 for melody.jpg';
import melodyPost3 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards3 for melody.jpg';
import melodyPost4 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards4 for melody.jpg';
import melodyPost5 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards5 for melody.jpg';
import melodyPost6 from '../assests/Yomi-Badejo Timilehin_Indesign Exploration Post Cards6 for melody.jpg';
import melodyBlue from '../assests/melody blue for melody.png';
import melodyHeadphones from '../assests/melody head phones for melody.png';
import melodyShape from '../assests/melody shape logo for melody.png';
import melodyPdf1 from '../assests/melodyBeatsDocument_Page_01.jpg';
import melodyPdf2 from '../assests/melodyBeatsDocument_Page_02.jpg';
import melodyPdf3 from '../assests/melodyBeatsDocument_Page_03.jpg';
import melodyPdf4 from '../assests/melodyBeatsDocument_Page_04.jpg';
import melodyPdf5 from '../assests/melodyBeatsDocument_Page_05.jpg';
import melodyPdf6 from '../assests/melodyBeatsDocument_Page_06.jpg';
import melodyPdf7 from '../assests/melodyBeatsDocument_Page_07.jpg';
import melodyPdf8 from '../assests/melodyBeatsDocument_Page_08.jpg';
import melodyPdf9 from '../assests/melodyBeatsDocument_Page_09.jpg';
import melodyPdf10 from '../assests/melodyBeatsDocument_Page_10.jpg';
import melodyPdf11 from '../assests/melodyBeatsDocument_Page_11.jpg';
import melodyPdf12 from '../assests/melodyBeatsDocument_Page_12.jpg';
import scwCharity from '../assests/scwcharitywebpage.png';
import scwWire1 from '../assests/SCW Charity Website Wireframe A 2_Page_01.jpg';
import scwWire2 from '../assests/SCW Charity Website Wireframe A 2_Page_02.jpg';
import scwWire3 from '../assests/SCW Charity Website Wireframe A 2_Page_03.jpg';
import scwWire4 from '../assests/SCW Charity Website Wireframe A 2_Page_04.jpg';
import scwWire5 from '../assests/SCW Charity Website Wireframe A 2_Page_05.jpg';
import scwWire6 from '../assests/SCW Charity Website Wireframe A 2_Page_06.jpg';
import scwWire7 from '../assests/SCW Charity Website Wireframe A 2_Page_07.jpg';
import scwWire8 from '../assests/SCW Charity Website Wireframe A 2_Page_08.jpg';
import scwWire9 from '../assests/SCW Charity Website Wireframe A 2_Page_09.jpg';
import scwWire10 from '../assests/SCW Charity Website Wireframe A 2_Page_10.jpg';
import scwWire11 from '../assests/SCW Charity Website Wireframe A 2_Page_11.jpg';
import scwWire12 from '../assests/SCW Charity Website Wireframe A 2_Page_12.jpg';
import scwWire13 from '../assests/SCW Charity Website Wireframe A 2_Page_13.jpg';
import timmyHairCare from '../assests/timmyhaircare4.jpg';
import timmyHairCare1 from '../assests/timmyhaircare1.jpg';
import timmyHairCare2 from '../assests/timmyhaircare2.jpg';
import timmyHairCare3 from '../assests/timmyhaircare3.jpg';
import timmyHairCare4 from '../assests/timmyhaircare4.jpg';
import timicare1 from '../assests/timicare-hair-brand-2_Page_01.jpg';
import timicare2 from '../assests/timicare-hair-brand-2_Page_02.jpg';
import timicare3 from '../assests/timicare-hair-brand-2_Page_03.jpg';
import timicare4 from '../assests/timicare-hair-brand-2_Page_04.jpg';
import timicare5 from '../assests/timicare-hair-brand-2_Page_05.jpg';
import timicare6 from '../assests/timicare-hair-brand-2_Page_06.jpg';
import timicare7 from '../assests/timicare-hair-brand-2_Page_07.jpg';
import timicare8 from '../assests/timicare-hair-brand-2_Page_08.jpg';
import timicare9 from '../assests/timicare-hair-brand-2_Page_09.jpg';
import timicare10 from '../assests/timicare-hair-brand-2_Page_10.jpg';
import timicare11 from '../assests/timicare-hair-brand-2_Page_11.jpg';
import ronUiUx1 from '../assests/Ui-Ux RonZalko-WebDesign_Page_01.jpg';
import ronUiUx2 from '../assests/Ui-Ux RonZalko-WebDesign_Page_02.jpg';
import ronUiUx3 from '../assests/Ui-Ux RonZalko-WebDesign_Page_03.jpg';
import ronUiUx4 from '../assests/Ui-Ux RonZalko-WebDesign_Page_04.jpg';
import ronUiUx5 from '../assests/Ui-Ux RonZalko-WebDesign_Page_05.jpg';
import ronUiUx6 from '../assests/Ui-Ux RonZalko-WebDesign_Page_06.jpg';
import ronUiUx7 from '../assests/Ui-Ux RonZalko-WebDesign_Page_07.jpg';
import ronUiUx8 from '../assests/Ui-Ux RonZalko-WebDesign_Page_08.jpg';
import ronUiUx9 from '../assests/Ui-Ux RonZalko-WebDesign_Page_09.jpg';
import ronUiUx10 from '../assests/Ui-Ux RonZalko-WebDesign_Page_10.jpg';
import ronUiUx11 from '../assests/Ui-Ux RonZalko-WebDesign_Page_11.jpg';
import ronUiUx12 from '../assests/Ui-Ux RonZalko-WebDesign_Page_12.jpg';
import ronUiUx13 from '../assests/Ui-Ux RonZalko-WebDesign_Page_13.jpg';
import ronUiUx14 from '../assests/Ui-Ux RonZalko-WebDesign_Page_14.jpg';
import ronUiUx15 from '../assests/Ui-Ux RonZalko-WebDesign_Page_15.jpg';
import ronUiUx16 from '../assests/Ui-Ux RonZalko-WebDesign_Page_16.jpg';
import ronUiUx17 from '../assests/Ui-Ux RonZalko-WebDesign_Page_17.jpg';
import astroPlaceholder from '../assests/AstorMatchlogo.jpg';
import astroMatchA from '../assests/astro-match-app_Page_0a.jpg';
import astroMatchB from '../assests/astro-match-app_Page_0b.jpg';
import astroMatchC from '../assests/astro-match-app_Page_0c.jpg';
import astroMatchD from '../assests/astro-match-app_Page_0d.jpg';
import astroMatchE from '../assests/astro-match-app_Page_0e.jpg';
import astroMatchF from '../assests/astro-match-app_Page_0f.jpg';
import astroMatchG from '../assests/astro-match-app_Page_0g.jpg';
import astroMatchH from '../assests/astro-match-app_Page_0h.jpg';
import astroMatchI from '../assests/astro-match-app_Page_0i.jpg';
import astroMatchJ from '../assests/astro-match-app_Page_0j.jpg';
import astroMatchK from '../assests/astro-match-app_Page_0k.jpg';
import astroMatch1 from '../assests/Astro-Match-App_Page_1.jpg';
import astroMatch2 from '../assests/Astro-Match-App_Page_2.jpg';
import astroMatch3 from '../assests/Astro-Match-App_Page_3.jpg';
import astroMatch4 from '../assests/Astro-Match-App_Page_4.jpg';
import motionPlaceholder from '../assests/motion graphics.webp';
import motionGraphicVideo from '../assests/Jujitsu_Kaisen_Intro_Bumper_Timilehin Yomi-Badejo_Final comp.mp4';
gsap.registerPlugin(ScrollTrigger);

const CODE_TABS = ["html", "css", "js"];

const ParallaxGallery = ({ images }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll('.parallax-card');
      cards.forEach((card, idx) => {
        const speed = parseFloat(card.dataset.speed || '0.12');
        const rect = card.getBoundingClientRect();
        const offset = rect.top + rect.height / 2 - window.innerHeight / 2;
        card.style.setProperty('--parallax-translate', `${offset * speed * -0.4}px`);
        card.style.setProperty('--parallax-base-scale', '1.02');
        card.style.opacity = Math.max(0.4, 1 - Math.abs(offset) / 800);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
        <div className="parallax-gallery" ref={containerRef}>
      {images.map((image, index) => (
        <Tilt
          key={index}
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glareEnable
          glareMaxOpacity={0.2}
          className="parallax-tilt"
        >
          <div
            className="parallax-card"
            data-speed={index % 2 === 0 ? 0.12 : 0.18}
          >
            <img src={image} alt={`Gallery ${index + 1}`} />
            <span className="parallax-label">Slide {index + 1}</span>
          </div>
        </Tilt>
      ))}
    </div>
  );
};

const CodeViewer = ({ samples }) => {
  const [activeTab, setActiveTab] = useState(
    CODE_TABS.find((key) => samples?.[key]) || "html"
  );

  useEffect(() => {
    const firstTab = CODE_TABS.find((key) => samples?.[key]);
    if (firstTab) {
      setActiveTab((current) => (current === firstTab ? current : firstTab));
    }
  }, [samples]);

  const tabs = CODE_TABS.filter((key) => samples?.[key]);
  const activeCode = samples?.[activeTab] || "";

  return (
    <div className="code-viewer">
      <div className="code-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`code-tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>
      <pre className="code-block">
        <code>{activeCode}</code>
      </pre>
    </div>
  );
};

// Project Data
const getProjectDataById = (id) => {
  const projects = [
    {
      id: "1",
      title: "Ron Zalko Web Design",
      image: RonZalkoWebDesign,
      overview: "Redesigned Ron Zalko Fitness & Yoga website to enhance user experience and provide seamless navigation.",
      challenges: "Overcame challenges in integrating complex booking forms, enhancing accessibility, and optimizing loading times.",
      outcome: "Delivered a presentation-ready UX case study with annotated wireframes and a clearer booking path for class review.",
      details: [
        "Implemented an intuitive navigation system.",
        "Enhanced accessibility for users with disabilities.",
        "Incorporated modern design aesthetics for improved engagement.",
      ],
      galleryImages: [
        ronWire1,
        ronWire2,
        ronWire3,
        ronWire4,
        ronWire5,
        ronWire6,
        ronWire7,
        ronWire8,
        ronWire9,
        ronWire10,
        ronWire11,
        ronWire12,
      ],
      technicalInfo: "UI/UX Design, Web Development, Accessibility Improvements",
    },
    {
      id: "2",
      title: "Melody Beats Branding",
      image: melodyBeats,
      overview: "Created cohesive branding for Melody Beats through logo and business card design to establish a strong visual identity.",
      challenges: "Balancing creative design with strict client requirements and tight deadlines.",
      outcome: "Packaged a cohesive brand system with mockups and print-ready files that met critique goals for the course.",
      details: [
        "Designed vibrant logos using Adobe Illustrator.",
        "Developed branding strategy and collateral.",
        "Iterated on designs based on client feedback.",
      ],
      technicalInfo: "Adobe Illustrator, Branding Strategy",
      galleryImages: [
        melodyBeats,
        melody3d,
        melodyBeatsLogo,
        melodyBusiness,
        melodyEntertainment,
        melodyLogoBlue,
        melodyLogoPoster,
        melodyBeatsAlt,
        melodyPdf1,
        melodyPdf2,
        melodyPdf3,
        melodyPdf4,
        melodyPdf5,
        melodyPdf6,
        melodyPdf7,
        melodyPdf8,
        melodyPdf9,
        melodyPdf10,
        melodyPdf11,
        melodyPdf12,
        melodyCard1,
        melodyCard2,
        melodyCard3,
        melodyCard4,
        melodyCard5,
        melodyCard6,
        melodyPost1,
        melodyPost2,
        melodyPost3,
        melodyPost4,
        melodyPost5,
        melodyPost6,
        melodyBlue,
        melodyHeadphones,
        melodyShape,
      ],
    },
    {
      id: "3",
      title: "TimmyCare App Redesign",
      image: timmyHairCare,
      overview: "Redesigned TimmyCare Hair App to improve navigation and user engagement, making it user-friendly.",
      challenges: "Simplifying navigation while maintaining brand aesthetics and addressing inconsistent user feedback.",
      outcome: "Produced an interactive prototype and usability summary showing smoother booking and product discovery for the course submission.",
      details: [
        "Redesigned app UI with a focus on simplicity.",
        "Enhanced user flows and wireframes using Figma.",
        "Improved app responsiveness across devices.",
      ],
      galleryImages: [
        timicare1,
        timicare2,
        timicare3,
        timicare4,
        timicare5,
        timicare6,
        timicare7,
        timicare8,
        timicare9,
        timicare10,
        timicare11,
        timmyHairCare1,
        timmyHairCare2,
        timmyHairCare3,
        timmyHairCare4,
      ],
      technicalInfo: "Figma, Prototyping, Wireframing",
    },
    {
      id: "4",
      title: "SCW Charity Website",
      image: scwCharity,
      overview: "Developed a user-focused website to promote social welfare initiatives and community outreach.",
      challenges: "Limited resources required creative problem-solving to deliver impactful results and ensure stakeholder satisfaction.",
      outcome: "Published a responsive prototype with accessible layouts and a storytelling deck for the outreach case study rubric.",
      details: [
        "Developed responsive layouts for mobile and desktop.",
        "Integrated CMS for easy content management.",
        "Received positive feedback from stakeholders.",
      ],
      technicalInfo: "Web Development, Content Management",
      galleryImages: [
        scwWire1,
        scwWire2,
        scwWire3,
        scwWire4,
        scwWire5,
        scwWire6,
        scwWire7,
        scwWire8,
        scwWire9,
        scwWire10,
        scwWire11,
        scwWire12,
        scwWire13,
      ],
    },
    {
      id: "5",
      title: "AstroMatch App",
      image: astroPlaceholder,
      overview: "Designed a swipe-based astrology dating experience that pairs users with matches based on compatibility scores and shared interests.",
      challenges: "Keeping the brand playful while ensuring onboarding, compatibility summaries, and chat flows stay intuitive on small screens.",
      outcome: "Documented compatibility flows and motion cues in a polished case study prepared for class critique.",
      details: [
        "Created mid and high-fidelity flows for onboarding, matching, and messaging.",
        "Documented compatibility logic, UI states, and motion cues for developer handoff.",
        "Packaged the case study with visuals and flow explanations for stakeholders.",
      ],
      technicalInfo: "Product Design, UI/UX, Prototyping",
      galleryImages: [
        astroMatch1,
        astroMatch2,
        astroMatch3,
        astroMatch4,
      ],
    },
    {
      id: "6",
      title: "Motion Graphic Intro",
      image: motionPlaceholder,
      video: motionGraphicVideo,
      overview: "Produced a fast-paced anime-inspired intro bumper with kinetic typography, lighting, and camera moves.",
      challenges: "Balancing legibility at high speed while syncing animation beats to audio cues and keeping export quality high.",
      outcome: "Rendered a web-optimized bumper that matched storyboard beats and playback requirements for the motion assignment.",
      details: [
        "Storyboarded timing beats to lock pacing before heading into After Effects.",
        "Animated typography, particle bursts, and camera sweeps to build momentum.",
        "Exported a web-friendly MP4 for smooth portfolio playback.",
      ],
      technicalInfo: "After Effects, Premiere Pro, Motion Graphics",
    },
    {
      id: "7",
      title: "KVDST Social Media Marketing Site",
      image: kvdstThumb,
      liveUrl: "https://kvdst.danielkolpakov.com/index.html",
      overview: "Co-built a collaborative marketing site for a school social campaign, pairing content strategy with a clean, scroll-friendly layout.",
      challenges: "Aligning design, copy, and handoff across GitHub while keeping the landing focused on a single CTA and smooth scroll experience.",
      outcome: "Launched a responsive landing that showcased the campaign narrative and made it simple to explore services and contact options.",
      details: [
        "Co-coded with Daniel Kolpakov using GitHub for version control, documentation, and PR reviews.",
        "Structured a hero, services, and results story that kept visitors moving down-page with anchored CTAs.",
        "Added subtle motion/hover accents while keeping performance lean for fast load on mobile.",
      ],
      technicalInfo: "Web Design, Collaboration, Social Media Marketing",
      codeSamples: {
        js: `$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "http://jennylynpereira.com/themeforest/antelope/assets/submit.php",
                type: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contact-form').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contact-form').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\\"tab\\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});`,
        css: `.owl-carousel .owl-wrapper:after {
    content: ".";
    display: block;
    clear: both;
    visibility: hidden;
    line-height: 0;
    height: 0;
}
/* display none until init */
.owl-carousel{
    display: none;
    position: relative;
    width: 100%;
    -ms-touch-action: pan-y;
}
.owl-carousel .owl-wrapper{
    display: none;
    position: relative;
    -webkit-transform: translate3d(0px, 0px, 0px);
}
.owl-carousel .owl-wrapper-outer{
    overflow: hidden;
    position: relative;
    width: 100%;
}
.owl-carousel .owl-wrapper-outer.autoHeight{
    -webkit-transition: height 500ms ease-in-out;
    -moz-transition: height 500ms ease-in-out;
    -ms-transition: height 500ms ease-in-out;
    -o-transition: height 500ms ease-in-out;
    transition: height 500ms ease-in-out;
}
    
.owl-carousel .owl-item{
    float: left;
}
.owl-controls .owl-page,
.owl-controls .owl-buttons div{
    cursor: pointer;
}
.owl-controls {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

/* mouse grab icon */
.grabbing { 
    cursor:url(grabbing.png) 8 8, move;
}

/* fix */
.owl-carousel  .owl-wrapper,
.owl-carousel  .owl-item{
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility:    hidden;
    -ms-backface-visibility:     hidden;
  -webkit-transform: translate3d(0,0,0);
  -moz-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
}`,
        html: `<!DOCTYPE html>
<html class="no-js" lang="en">
  <head>
    <!-- Basic Page Needs
    ================================================== -->
    <meta charset="utf-8">
    <!--[if IE]><meta http-equiv="x-ua-compatible" content="IE=9" /><![endif]-->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>KVDST Music Label</title>
    <meta name="description" content="KVDST Music Label. It is built using bootstrap 3.3.2 framework, works totally responsive, easy to customise, well commented codes and seo friendly.">
    <meta name="keywords" content="KVDST Music Label, music, industry, records, entertainment">
    
    
    <!-- ==============================================
    Favicons
    =============================================== -->
    <link rel="shortcut icon" href="images/kvdst 72.png">
    <link rel="apple-touch-icon" href="images/kvdst-touch-icon.png">
    <link rel="apple-touch-icon" sizes="72x72" href="images/kvdst 72.png">
    <link rel="apple-touch-icon" sizes="114x114" href="images/kvdst 114.png">
    
    <!-- ==============================================
    CSS
    =============================================== -->
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/owl.carousel.css">
    <link rel="stylesheet" type="text/css" href="css/owl.theme.css">
    <link rel="stylesheet" type="text/css" href="css/magnific-popup.css">
    <link rel="stylesheet" type="text/css" href="css/superslides.css">
    
    <!-- ==============================================
    Google Fonts
    =============================================== -->
    <link href='https://fonts.googleapis.com/css?family=Dosis' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
    
    <!-- ==============================================
    Custom Stylesheet
    =============================================== -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    
    
    
    <script type="text/javascript" src="js/modernizr.min.js"></script>
    
    

</head>

<body>
    
    <!-- Load page -->
    <div class="animationload">
        <div class="loader"></div>
    </div>
    
    <!-- NAVBAR SECTION -->
    <div class="navbar navbar-main navbar-fixed-top">
        <div class="container">
        
            <div class="top-sosmed pull-right">
                <a href="#" title=""><span class="fa fa-facebook"></span></a>
                <a href="#" title=""><span class="fa fa-twitter"></span></a>
                <a href="#" title=""><span class="fa fa-soundcloud"></span></a>
            </div>
            
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">
                    <img src="images/KVDST LOGO.png" alt="" />
                </a>
            </div>
            
            <nav id="navbar-spy" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#slides">Home</a></li>
                    <li><a href="#studio">About Us</a></li>
                    <li><a href="#services">Events</a></li>
                    <li><a href="#gallery">Merch</a></li>
                    <li><a href="#team">TEAM</a></li>
                    <li><a href="#news">NEWS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                    <li class="dropdown">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">About Us</a></li>
                        <li><a href="gallery.html">Merch</a></li>
                        <li><a href="team.html">Team</a></li>
                        <li><a href="news.html">News</a></li>
                        <li><a href="news-detail.html">News Detail</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="blog-detail.html">Blog</a></li>
                      </ul>
                    </li>

                </ul>
            </nav>
            
        </div>
    </div>
 
    <!-- BANNER -->
    <div class="section subbanner">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="caption">RUST CHAINS MERCH</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- GALLERY SECTION -->
    <div class="section gallery">
        <div class="container">
            
            <div class="row popup-gallery">
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="images/chaotic collapse black tee.png" title="Gallery #1">
                            <img src="images/chaotic collapse black tee.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="images/chaotic collapse inverted.png" title="Gallery #2">
                            <img src="images/chaotic collapse inverted.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="images/chaotic collapse vinyl.png" title="Gallery #3">
                            <img src="images/chaotic collapse vinyl.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="images/chaotic collapse tee.png" title="Gallery #4">
                            <img src="images/chaotic collapse tee.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="images/chaotic collapse hoodie.png" title="Gallery #5">
                            <img src="images/chaotic collapse hoodie.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="images/the revolution graphic.png" title="Gallery #6">
                            <img src="images/the revolution graphic.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="images/the revolution vinly.png" title="Gallery #1">
                            <img src="images/the revolution vinly.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="images/logo tshirt.png" title="Gallery #1">
                            <img src="images/logo tshirt.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="images/chaotic collapse.png" title="Gallery #1">
                            <img src="images/chaotic collapse.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="images/logo hoodie.png" title="Gallery #2">
                            <img src="images/logo hoodie.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="iimages/hoodiemockup.png" title="Gallery #3">
                            <img src="images/hoodiemockup.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-xs-4 col-sm-3 col-md-3">
                    <div class="w-item">
                        <a href="images/rust chains vinyl sticker.png" title="Gallery #4">
                            <img src="images/rust chains vinyl sticker.png" alt="" class="img-responsive">
                            <div class="project-info">
                                <div class="project-icon">
                                    <span class="fa fa-search"></span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>
        
        </div>
    </div>
    
    <!-- VIDEO SECTION -->
    <div class="section video bg2">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-md-offset-3">
                    <div class="section-title">
                        <h3 class="lead">LATEST VIDEO</h3>
                        <div class="border-style"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-8 col-md-offset-2">
                    <!-- 16:9 aspect ratio -->
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/RVBPu9sPKkU"></iframe>
                    </div>

                </div>
                
            </div>
            
        </div>
    </div>

    <!-- AUDIO SECTION -->
    <div class="section audio">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 col-md-offset-3">
                    <div class="section-title">
                        <h3 class="lead">LATEST AUDIO</h3>
                        <div class="border-style"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-8 col-md-offset-2">
                    <!-- 16:9 aspect ratio -->
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe class="embed-responsive-item" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/61082232&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
                    </div>

                </div>
                
            </div>
            
        </div>
    </div>

    <!-- CONNECT SECTION -->
    <div class="section connect bg5">
        <div class="container">
            
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <a href="#" title="">
                        <div class="item">
                            <i class="fa fa-facebook"></i>
                        </div>
                    </a>
                    <a href="#" title="">
                        <div class="item">
                            <i class="fa fa-twitter"></i>
                        </div>
                    </a>
                    <a href="#" title="">
                        <div class="item">
                            <i class="fa fa-pinterest"></i>
                        </div>
                    </a>
                    <a href="#" title="">
                        <div class="item">
                            <i class="fa fa-google"></i>
                        </div>
                    </a>
                    <a href="#" title="">
                        <div class="item">
                            <i class="fa fa-instagram"></i>
                        </div>
                    </a>
                    <a href="#" title="">
                        <div class="item">
                            <i class="fa fa-soundcloud"></i>
                        </div>
                    </a>
                </div>
                
            </div>
            
        </div>
    </div>

    <!-- FOOTER SECTION -->
    <div class="footer">
    
        <div class="f-desc">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-md-4">
                        <div class="footer-item">
                            <div class="footer-title">
                                <h4>ABOUT US</h4>
                            </div>
                            <p> Welcome to KVDST Record Label, your gateway to the vibrant world of Canadian music. At KVDST, we are dedicated to discovering and nurturing musical talent from across the country. Our mission is to provide a platform for emerging and local artists, giving them the support and resources they need to thrive in the music industry.</p>
                            <div class="about-info">
                                <p>
                                    KVDST Record Label <br />
                                    KVDST Record Label
                                    123 Music Lane
                                    Vancouver, BC
                                    V6B 1A1 <br />
                                    Office Hours: Monday to Friday, 9:00 AM - 5:00 PM (PST) <br />
                                P:+1 (604) 555-6789
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4">
                        <div class="footer-item">
                            <div class="footer-title">
                                <h4>LATEST POST</h4>
                            </div>
                            <div class="widget-wrap">
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                          <img class="media-object" src="images/upcomingevent.jpg" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <p><a href="#" title="">Upcoming Events: Summer Concert Series.</a></p>
                                        <div class="meta-comment">
                                            <i class="fa fa-comments"></i>Mark your calendars for the KVDST Summer Concert Series! Join us for unforgettable nights of live music featuring some of our best artists.
                                        </div>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                          <img class="media-object" src="images/meettheteam.jpg" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <p><a href="#" title="">Meet the Team: Behind the Scenes at KVDST.</a></p>
                                        <div class="meta-comment">
                                            <i class="fa fa-comments"></i>Get to know the passionate individuals who make KVDST Record Label possible. From our dedicated A&R team to our innovative marketing experts, meet the people working tirelessly to bring you the best in music
                                        </div>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-left">
                                        <a href="#">
                                          <img class="media-object" src="images/luna echo.jpg" alt="...">
                                        </a>
                                    </div>
                                    <div class="media-body">
                                        <p><a href="#" title="">Review: "Luna Wave's 'Cosmic Drift' redefines genre boundaries, offering a fresh and captivating listening experience." </a></p>
                                        <div class="meta-comment">
                                            <i class="fa fa-comments"></i>20 Comments
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-4">
                        <div class="footer-item">
                            <div class="footer-title">
                                <h4>NEWSLETTER</h4>
                            </div>
                            <div class="footer-form">
                                <form action="#">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Name">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-default">SUBSCRIBE</button>
                                    </div>
                                    
                                </form>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
                
        </div>
        
        <div class="fcopy">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <p class="ftex">&copy;2024 KVDST Record Label. All rights reserved.</p> 
                    </div>
                </div>
            </div>
        </div>
        
    </div>
     
     
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery.superslides.js"></script>
    <script type='text/javascript' src='https://maps.google.com/maps/api/js?sensor=false&#038;ver=4.1.5'></script>
    <script type="text/javascript" src="js/waypoints.min.js"></script>
    
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/owl.carousel.min.js"></script>
    <script type="text/javascript" src="js/bootstrap-hover-dropdown.min.js"></script>
    <!-- sendmail -->
    <script type="text/javascript" src="js/validator.min.js"></script>
    <script type="text/javascript" src="js/form-scripts.js"></script>
    
    <script type="text/javascript" src="js/jquery.magnific-popup.min.js"></script>
    <script type="text/javascript" src="js/script.js"></script>
    
</body>
</html>`
      },
    },
  ];

  return projects.find((project) => project.id === id);
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const projectData = getProjectDataById(projectId);
  const isRon = projectData?.id === "1";
  const isMelody = projectData?.id === "2";
  const isScw = projectData?.id === "4";
  const isTimmyCare = projectData?.id === "3";
  const isAstro = projectData?.id === "5";
  const isKvdst = projectData?.id === "7";
  const ronViewportRef = useRef(null);
  const ronTrackRef = useRef(null);
  const liveFrameRef = useRef(null);

  useEffect(() => {
    if (!isRon) return;
    const viewport = ronViewportRef.current;
    const track = ronTrackRef.current;
    if (!viewport || !track) return;

    gsap.registerPlugin(ScrollTrigger);
    const getMaxMove = () => Math.max(0, track.scrollHeight - viewport.offsetHeight);

    const trigger = ScrollTrigger.create({
      trigger: viewport,
      start: "top top",
      end: () => `+=${track.scrollHeight}`,
      scrub: true,
      onUpdate: (self) => {
        const maxMove = getMaxMove();
        gsap.to(track, { y: -maxMove * self.progress, ease: "none", overwrite: true, duration: 0 });
      },
    });

    const handleResize = () => trigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      trigger.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [isRon]);

  useEffect(() => {
    if (!projectData?.liveUrl || !liveFrameRef.current) return;
    gsap.fromTo(
      liveFrameRef.current,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: liveFrameRef.current,
          start: "top 75%",
        },
      }
    );
  }, [projectData]);

  if (!projectData) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-detail">
      <BackToHomeButton to="/work" label="Back to Work" />
      {/* Hero Section */}
      <div
        className={`project-hero ${isMelody ? 'melody-hero' : ''} ${isScw ? 'scw-hero' : ''} ${
          isTimmyCare ? 'timmy-hero' : ''
        } ${isRon ? 'ron-hero' : ''} ${isAstro ? 'astro-hero' : ''} ${isKvdst ? 'kvdst-hero' : ''}`}
      >
        {isMelody ? (
          <div className="melody-pdf-sticky">
            <div className="melody-doc-images">
              {[
                melodyPdf1,
                melodyPdf2,
                melodyPdf3,
                melodyPdf4,
                melodyPdf5,
                melodyPdf6,
                melodyPdf7,
                melodyPdf8,
                melodyPdf9,
                melodyPdf10,
                melodyPdf11,
                melodyPdf12,
              ].map((img, idx) => (
                <div key={idx} className="melody-doc-image">
                  <img src={img} alt={`Melody Beats Document page ${idx + 1}`} />
                  <span className="melody-doc-page">Page {idx + 1}</span>
                </div>
              ))}
            </div>
          </div>
        ) : isTimmyCare ? (
          <div className="timmy-scroll-hero">
            <div className="timmy-scroll-viewport">
              <div className="timmy-scroll-track">
                {[
                  timicare1,
                  timicare2,
                  timicare3,
                  timicare4,
                  timicare5,
                  timicare6,
                  timicare7,
                  timicare8,
                  timicare9,
                  timicare10,
                  timicare11,
                ].map((img, idx) => (
                  <div className="timmy-scroll-frame" key={idx}>
                    <img src={img} alt={`TimmyCare page ${idx + 1}`} />
                    <span className="timmy-scroll-page">Page {idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="timmy-scroll-hint">Scroll to browse the TimmyCare case study</span>
          </div>
        ) : isAstro ? (
          <div className="astro-scroll-hero">
            <div className="astro-scroll-viewport">
              <div className="astro-scroll-track">
                {[
                  astroMatchA,
                  astroMatchB,
                  astroMatchC,
                  astroMatchD,
                  astroMatchE,
                  astroMatchF,
                  astroMatchG,
                  astroMatchH,
                  astroMatchI,
                  astroMatchJ,
                  astroMatchK,
                ].map((img, idx) => (
                  <div className="astro-scroll-frame" key={idx}>
                    <img src={img} alt={`AstroMatch page ${idx + 1}`} />
                    <span className="astro-scroll-page">Page {idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="astro-scroll-hint">Scroll to browse AstroMatch</span>
          </div>
        ) : isRon ? (
          <div className="ron-scroll-hero">
            <div className="ron-scroll-viewport" ref={ronViewportRef}>
              <div className="ron-scroll-track" ref={ronTrackRef}>
              {[
                ronUiUx1,
                ronUiUx2,
                ronUiUx3,
                ronUiUx4,
                ronUiUx5,
                ronUiUx6,
                ronUiUx7,
                ronUiUx8,
                ronUiUx9,
                ronUiUx10,
                ronUiUx11,
                ronUiUx12,
                ronUiUx13,
                ronUiUx14,
                ronUiUx15,
                ronUiUx16,
                ronUiUx17,
              ].map((img, idx) => (
                <div className="ron-scroll-frame" key={idx}>
                  <img src={img} alt={`Ron Zalko page ${idx + 1}`} />
                  <span className="ron-scroll-page">Page {idx + 1}</span>
                </div>
              ))}
              </div>
            </div>
            <span className="ron-scroll-hint">Scroll to browse the Ron Zalko case study</span>
          </div>
        ) : isScw ? (
          <div className="scw-scroll-hero">
            <div className="scw-scroll-viewport">
              <img
                src={projectData.image}
                alt={projectData.title}
                className="scw-scroll-image"
              />
            </div>
            <span className="scw-scroll-hint">Scroll to explore the full page</span>
          </div>
        ) : (
          <img src={projectData.image} alt={projectData.title} className="project-image" />
        )}
        <h1>{projectData.title}</h1>
        <h3>{projectData.technicalInfo}</h3>
      </div>

      {projectData.liveUrl && (
        <div className="live-site-section" ref={liveFrameRef}>
          <div className="live-site-head">
            <h2>Live site preview</h2>
            <a
              className="project-doc-link"
              href={projectData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open live site
            </a>
          </div>
          <div className="live-site-frame">
            <div className="live-site-bar">
              <span></span><span></span><span></span>
              <p>kvdst.danielkolpakov.com</p>
            </div>
            <iframe
              className="live-site-iframe"
              src={projectData.liveUrl}
              title={`${projectData.title} live preview`}
              loading="lazy"
            />
          </div>
          <p className="live-site-note">Scroll inside to explore the campaign site.</p>
        </div>
      )}

      {/* Cards Section */}
      <div className="cards-container">
        <div className="card">
          <h2>Project Overview</h2>
          <p>{projectData.overview}</p>
        </div>
        <div className="card">
          <h2>Challenges Overcome</h2>
          <p>{projectData.challenges}</p>
        </div>
        {projectData.outcome && (
          <div className="card">
            <h2>Outcome</h2>
            <p>{projectData.outcome}</p>
          </div>
        )}
        <div className="card">
          <h2>Details</h2>
          <ul>
            {projectData.details?.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* PDF Viewer */}
      {(projectData.pdf || projectData.image) && (
        <div className="project-section">
          <h2>Project Files</h2>
          <div className="project-doc-actions project-doc-actions-centered">
            {projectData.image && (
              <a
                href={projectData.image}
                target="_blank"
                rel="noopener noreferrer"
                className="project-doc-link"
              >
                Open JPG preview
              </a>
            )}
          </div>
        </div>
      )}

      {projectData.video && (
        <div className="project-section">
          <h2>Project Video</h2>
          <div className="project-video-wrapper">
            <video
              className="project-video"
              src={projectData.video}
              controls
              poster={projectData.image}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {isKvdst && projectData.codeSamples && (
        <div className="project-section">
          <h2>View code</h2>
          <p className="code-note">HTML, CSS, and JS pulled straight from the campaign repo.</p>
          <CodeViewer samples={projectData.codeSamples} />
        </div>
      )}

      {!isKvdst && (
        <div className="project-section">
          <h2>Gallery</h2>
          {projectData.galleryImages ? (
            <ParallaxGallery images={projectData.galleryImages} />
          ) : (
            <Carousel showThumbs={false} dynamicHeight>
              <div>
                <img src={projectData.image} alt="Project" />
              </div>
            </Carousel>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
