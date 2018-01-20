export const normalizeContactsList = (contactsData) => {
  let linksArray;
  const resultLinks = [];
  if (contactsData.link) {
    linksArray = contactsData.link.split(',');
    linksArray.map(link => {
      resultLinks.push({
        link: link.split(';')[0].replace(/[<>]/g,''),
        relIcon: _setPaginationLinkIcon(link.split(';')[1].split('=')[1])
      });
    });
  }
  return {
    list: contactsData.data,
    links: resultLinks
  };
};

function _setPaginationLinkIcon(link) {
  let icon = 'mdi ';
  switch (link) {
    case '"first"':
      icon += 'mdi-chevron-double-left';
      break;

    case '"next"':
      icon += 'mdi-chevron-right';
      break;

    case '"prev"':
      icon += 'mdi-chevron-left';
      break;

    case '"last"':
      icon += 'mdi-chevron-double-right';
      break;

    default:
      icon += '';
  }

  return icon;
}