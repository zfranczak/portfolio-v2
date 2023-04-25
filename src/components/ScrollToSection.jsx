const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    // Get the height of the navbar
    const navbarHeight = document.querySelector('.nav-bg').offsetHeight
    // Calculate the target scroll position by subtracting the navbar height from the section's top position
    const targetScrollPos = section.offsetTop - navbarHeight
    // Scroll to the target position
    window.scrollTo({
      top: targetScrollPos,
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export default handleScrollToSection
