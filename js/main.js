const animation = gsap.timeline({ defaults: { duration: 0.2 } });

animation
  .from(".card", { x: "-50vw", opacity: 0, ease: "power2", stagger: -0.5 })
  .from(".card__info", { x: "-50vw", opacity: 0, ease: "back" })
  .from(".card__activity-social", {
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
    ease: "slow",
  });
