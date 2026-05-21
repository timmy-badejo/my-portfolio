$(function () {
	"use strict";

	var $window = $(window);
	var $document = $(document);
	var $htmlBody = $("html, body");
	var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	enhancePageShell();
	initLoader();
	initSlides();
	initNav();
	initCarousels();
	initScrollReveals();
	initAmbientMotion();
	initMagneticCards();
	initGallery();
	initReadingProgress();
	initMaps();

	function enhancePageShell() {
		if (!$(".ambient-stage").length) {
			$("body").prepend(
				'<div class="ambient-stage" aria-hidden="true">' +
					'<div class="ambient-grid"></div>' +
					'<div class="ambient-vinyl"></div>' +
					'<div class="ambient-eq"></div>' +
				"</div>"
			);
		}

		if (!$(".cursor-halo").length) {
			$("body").append('<div class="cursor-halo" aria-hidden="true"></div>');
		}

		var bars = "";
		for (var i = 0; i < 28; i += 1) {
			bars += '<span style="--i:' + i + '"></span>';
		}
		$(".ambient-eq").html(bars);

		$(".banner .wrap-caption, .subbanner .caption").addClass("is-reveal-target");
		$(".section-title, .feature-item, .services-item, .blog-item, .team-item, .w-item, .contact-item, .post-item.detail, .why-item").addClass("is-reveal-target");
		$(".blog-item .description").each(function () {
			var $item = $(this);
			if (!$item.find(".card-kicker").length) {
				$item.prepend('<div class="card-kicker">KVDST Dispatch</div>');
			}
		});
	}

	function initLoader() {
		$(".loader").delay(250).fadeOut(350);
		$(".animationload").delay(350).fadeOut(450);
	}

	function initSlides() {
		if (!$.fn.superslides || !$("#slides").length) {
			return;
		}

		$("#slides").superslides({
			animation: "fade",
			play: prefersReducedMotion ? 0 : 7600,
			slide_speed: 900,
			pagination: true,
			hashchange: false,
			scrollable: true
		});
	}

	function initNav() {
		var $navbar = $(".navbar-main");
		var $links = $(".navbar-nav a");
		var currentPage = window.location.pathname.split("/").pop() || "index.html";

		$links.each(function () {
			var hrefPage = ($(this).attr("href") || "").split("#")[0] || "index.html";
			if (hrefPage === currentPage || (currentPage === "services.html" && hrefPage === "events.html")) {
				$(this).parent().addClass("active");
			}
		});

		setNavState();
		$window.on("scroll resize", setNavState);

		$links.on("click", function (event) {
			var href = $(this).attr("href");
			var target = getLocalTarget(href);

			if (!target.length) {
				return;
			}

			event.preventDefault();
			$htmlBody.stop().animate({
				scrollTop: Math.max(target.offset().top - $navbar.outerHeight(), 0)
			}, prefersReducedMotion ? 0 : 850);

			$(".navbar-collapse.in").collapse("hide");
		});

		function setNavState() {
			var top = $document.scrollTop();
			var viewport = $window.height();
			$navbar.toggleClass("stiky", top > 80);
			$("body").toggleClass("has-scrolled", top > 12);
			document.documentElement.style.setProperty("--scroll-ratio", Math.min(top / Math.max(viewport, 1), 1).toFixed(3));
		}
	}

	function getLocalTarget(href) {
		if (!href || href === "#") {
			return $();
		}

		var currentPage = window.location.pathname.split("/").pop() || "index.html";
		var parts = href.split("#");
		var targetPage = parts[0] || currentPage;
		var targetHash = parts[1] ? "#" + parts[1] : "";

		if (!targetHash || targetPage !== currentPage) {
			return $();
		}

		try {
			return $(targetHash);
		} catch (error) {
			return $();
		}
	}

	function initCarousels() {
		if (!$.fn.owlCarousel) {
			return;
		}

		$("#about-caro").owlCarousel({
			autoPlay: prefersReducedMotion ? false : 5200,
			stopOnHover: true,
			singleItem: true
		});

		$("#owl-testimony").owlCarousel({
			autoPlay: prefersReducedMotion ? false : 5600,
			stopOnHover: true,
			singleItem: true
		});
	}

	function initScrollReveals() {
		var targets = document.querySelectorAll(".is-reveal-target");

		if (!targets.length) {
			return;
		}

		if (!("IntersectionObserver" in window) || prefersReducedMotion) {
			$(targets).addClass("is-visible");
			return;
		}

		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, {
			threshold: 0.16,
			rootMargin: "0px 0px -8% 0px"
		});

		Array.prototype.forEach.call(targets, function (target, index) {
			target.style.setProperty("--reveal-delay", Math.min(index % 8, 6) * 55 + "ms");
			observer.observe(target);
		});
	}

	function initAmbientMotion() {
		var halo = document.querySelector(".cursor-halo");
		var root = document.documentElement;

		if (!halo || prefersReducedMotion) {
			return;
		}

		$window.on("mousemove", function (event) {
			var x = event.clientX;
			var y = event.clientY;
			root.style.setProperty("--cursor-x", x + "px");
			root.style.setProperty("--cursor-y", y + "px");
			halo.style.transform = "translate3d(" + x + "px," + y + "px,0)";
		});

		$window.on("scroll", function () {
			var offset = Math.round($window.scrollTop() * -0.08);
			document.documentElement.style.setProperty("--drift-y", offset + "px");
		});
	}

	function initMagneticCards() {
		if (prefersReducedMotion) {
			return;
		}

		var selector = ".feature-item, .services-item, .blog-item, .team-item, .w-item, .contact-item";

		$(document).on("mousemove", selector, function (event) {
			var rect = this.getBoundingClientRect();
			var x = event.clientX - rect.left;
			var y = event.clientY - rect.top;
			var rotateY = ((x / rect.width) - 0.5) * 7;
			var rotateX = ((y / rect.height) - 0.5) * -7;

			this.style.setProperty("--tilt-x", rotateX.toFixed(2) + "deg");
			this.style.setProperty("--tilt-y", rotateY.toFixed(2) + "deg");
			this.classList.add("is-tilting");
		});

		$(document).on("mouseleave", selector, function () {
			this.classList.remove("is-tilting");
			this.style.removeProperty("--tilt-x");
			this.style.removeProperty("--tilt-y");
		});
	}

	function initGallery() {
		$(".popup-gallery .w-item a").each(function () {
			var $link = $(this);
			var title = $link.attr("title") || "KVDST piece";

			if (!$link.find(".project-label").length) {
				$link.find(".project-info").append('<div class="project-label">' + title + "</div>");
			}
		});

		if (!$.fn.magnificPopup) {
			return;
		}

		$(".popup-gallery").magnificPopup({
			delegate: "a",
			type: "image",
			tLoading: "Loading image #%curr%...",
			mainClass: "mfp-img-mobile mfp-kvdst",
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1]
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function (item) {
					return item.el.attr("title") || "";
				}
			}
		});
	}

	function initReadingProgress() {
		if (!$(".post-item.detail").length) {
			return;
		}

		if (!$(".reading-progress").length) {
			$("body").prepend('<div class="reading-progress" aria-hidden="true"><span></span></div>');
		}

		var $bar = $(".reading-progress span");
		updateProgress();
		$window.on("scroll resize", updateProgress);

		function updateProgress() {
			var scrollable = Math.max($document.height() - $window.height(), 1);
			var progress = Math.min(($window.scrollTop() / scrollable) * 100, 100);
			$bar.css("width", progress + "%");
		}
	}

	function initMaps() {
		if (!$("#maps").length || !window.google || !google.maps) {
			$(".maps-wraper").addClass("maps-fallback");
			return;
		}

		function CustomZoomControl(controlDiv, map) {
			var controlUIzoomIn = document.getElementById("cd-zoom-in");
			var controlUIzoomOut = document.getElementById("cd-zoom-out");

			if (!controlUIzoomIn || !controlUIzoomOut) {
				return;
			}

			controlDiv.appendChild(controlUIzoomIn);
			controlDiv.appendChild(controlUIzoomOut);

			google.maps.event.addDomListener(controlUIzoomIn, "click", function () {
				map.setZoom(map.getZoom() + 1);
			});
			google.maps.event.addDomListener(controlUIzoomOut, "click", function () {
				map.setZoom(map.getZoom() - 1);
			});
		}

		var $map = $("#maps");
		var latitude = $map.data("lat");
		var longitude = $map.data("lng");
		var markerUrl = $map.data("marker");
		var mapZoom = 14;
		var style = [
			{ elementType: "geometry", stylers: [{ color: "#07101d" }] },
			{ elementType: "labels.text.fill", stylers: [{ color: "#9cb0bb" }] },
			{ elementType: "labels.text.stroke", stylers: [{ color: "#050812" }] },
			{ featureType: "water", elementType: "geometry", stylers: [{ color: "#0f3345" }] },
			{ featureType: "road", elementType: "geometry", stylers: [{ color: "#16283a" }] },
			{ featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#07101d" }] },
			{ featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] },
			{ featureType: "transit", elementType: "geometry", stylers: [{ color: "#102236" }] }
		];

		var mapOptions = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: mapZoom,
			panControl: false,
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style
		};

		var map = new google.maps.Map(document.getElementById("maps"), mapOptions);

		new google.maps.Marker({
			position: new google.maps.LatLng(latitude, longitude),
			map: map,
			visible: true,
			icon: markerUrl
		});

		var zoomControlDiv = document.createElement("div");
		new CustomZoomControl(zoomControlDiv, map);
		map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
	}
});
