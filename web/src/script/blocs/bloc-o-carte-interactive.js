$(document).ready(function () {
  const elRegionInfos = document.querySelector('#region-infos');
  const elRegionTitle = document.querySelector('#region-title');
  const elRegionDesc = document.querySelector('#region-desc');
  const elRegionLink = document.querySelector('.region-link');
  let elRegionLinkInnerHtml;

  if (elRegionLink != null) {
    elRegionLinkInnerHtml = document.querySelector('.region-link').innerHTML;
  }

  // Région Select
  const elRegionBtn = document.querySelector('#region-sel-btn');
  if (elRegionBtn != null) {
    elRegionBtn.addEventListener("click", onRegionSelect);
  }

  var regionsData = {
    "FR-GF": {
      name: "Guyane",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Guyane", value: "#Guyane" }
    },
    "FR-H": {
      name: "Corse",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Corse", value: "#Corse" }
    },
    "FR-F": {
      name: "Centre-Val de Loire",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Centre-Val de Loire", value: "#Centre-Val de Loire" }
    },
    "FR-E": {
      name: "Bretagne",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Bretagne", value: "#Bretagne" }
    },
    "FR-X1": {
      name: "Bourgogne-Franche-Comté",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Bourgogne-Franche-Comté", value: "#Bourgogne-Franche-Comté" }
    },
    "FR-MQ": {
      name: "Martinique",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Martinique", value: "#Martinique" }
    },
    "FR-YT": {
      name: "Mayotte",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Mayotte", value: "#Mayotte" }
    },
    "FR-X4": {
      name: "Grand Est",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Grand Est", value: "#Grand Est" }
    },
    "FR-X5": {
      name: "Occitanie",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Occitanie", value: "#Occitanie" }
    },
    "FR-X6": {
      name: "Hauts-de-France",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Hauts-de-France", value: "#Hauts-de-France" }
    },
    "FR-X7": {
      name: "Auvergne-Rhône-Alpes",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Auvergne-Rhône-Alpes", value: "#Auvergne-Rhône-Alpes" }
    },
    "FR-X3": {
      name: "Normandie",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Normandie", value: "#Normandie" }
    },
    "FR-R": {
      name: "Pays de la Loire",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Pays de la Loire", value: "#Pays de la Loire" }
    },
    "FR-GP": {
      name: "Guadeloupe",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Guadeloupe", value: "#Guadeloupe" }
    },
    "FR-U": {
      name: "Provence-Alpes-Côte-d'Azur",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Provence-Alpes-Côte-d'Azur", value: "#Provence-Alpes-Côte-d'Azur" }
    },
    "FR-J": {
      name: "Île-de-France",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Île-de-France", value: "#Île-de-France" }
    },
    "FR-X2": {
      name: "Nouvelle-Aquitaine",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Nouvelle-Aquitaine", value: "#Nouvelle-Aquitaine" }
    },
    "FR-RE": {
      name: "Réunion",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugiat adipisicing sit anim ullamco proident. Do consequat velit culpa ipsum et minim proident eiusmod consectetur tempor occaecat minim dolore.",
      link: { label: "Réunion", value: "#Réunion" }
    }
  };

  if (
    typeof drupalSettings !== 'undefined' &&
    typeof drupalSettings.asip !== 'undefined' &&
    typeof drupalSettings.asip.map !== 'undefined' ) {
    regionsData = drupalSettings.asip.map;
  }

  $(function () {
    $('#map').vectorMap({
      map: 'fr_regions_2016_merc',
      backgroundColor: '#ffffff',
      zoomOnScrollSpeed: 1,
      regionsSelectable: true,
      regionsSelectableOne: true,
      regionStyle: {
        initial: {
          fill: '#DEE0EA',
          "fill-opacity": 1,
          stroke: 'none',
          "stroke-width": 0,
          "stroke-opacity": 1
        },
        hover: {
          fill: '#C5C8DA',
          "fill-opacity": 1,
          cursor: 'pointer'
        },
        selected: {
          fill: '#1D71B8'
        },
        selectedHover: {
        }
      },
      onRegionClick: function (e, regionCode) {
        onRegionClick(regionCode);
        document.getElementById("regions-list").value = regionCode;
        document.getElementById('region-sel-btn').removeAttribute('disabled');
      }
    });
  });

  function onRegionSelect() {
    let regionSelectedValue = document.getElementById("regions-list").value
    onRegionClick(regionSelectedValue);
  }

  function onRegionClick(regionCode) {
    showRegionInfos();
    elRegionTitle.innerText = regionsData[regionCode].name;
    elRegionDesc.innerText = regionsData[regionCode].description;
    elRegionLink.innerHTML = elRegionLinkInnerHtml + regionsData[regionCode].link.label;
    elRegionLink.href = regionsData[regionCode].link.value;
    var mapObj = $('#map').vectorMap('get', 'mapObject');
    mapObj.clearSelectedRegions();
    mapObj.setSelectedRegions(regionCode);
  }

  function showRegionInfos() {
    if (elRegionInfos.classList.contains('d-none')) {
      elRegionInfos.classList.replace('d-none', 'd-block');
    }
  }

  $('#regions-list').on('change', function () {
    $('#region-sel-btn').prop('disabled', !$(this).val());
  }).trigger('change');
});
