export const scrollToDiscuss = () => {
    const section = document.getElementById('discuss');
    section?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };