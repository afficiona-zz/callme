export const normalizeContactsList = (contactsData) => {
  let linksArray;
  const resultLinks = [];
  if (contactsData.link) {
    linksArray = contactsData.link.split(',');
  }
  linksArray.map(link => {
    resultLinks.push({
      link: link.split(';')[0].replace(/[<>]/g,''),
      rel: link.split(';')[1].split('=')[1]
    });
  });
  return {
    list: contactsData.data,
    links: resultLinks
  };
};
