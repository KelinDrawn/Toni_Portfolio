// case study images BEFORE
import MapNavigationBefore from "@/images/blog/swisscharge/MapNavigationOriginal.png";
import ChargingStationBefore from "@/images/blog/swisscharge/ChargingStationOriginal.png";
import StartChargingBefore from "@/images/blog/swisscharge/StartChargingOriginal.png";
import ReceiptsBefore from "@/images/blog/swisscharge/ChargingHistoryOriginal.png";
import FavoritesBefore from "@/images/blog/swisscharge/FavouritesOriginal.png";
import FilterBefore from "@/images/blog/swisscharge/MapFilterOriginal.png";

// case study images AFTER
import MapNavigationAfter from "@/images/blog/swisscharge/MapNavigationRedesign.png";
import ChargingStationAfter from "@/images/blog/swisscharge/ChargingStationRedesign.png";
import StartChargingAfter from "@/images/blog/swisscharge/StartChargingRedesign.png";
import ReceiptsAfter from "@/images/blog/swisscharge/ChargingHistoryRedesign.png";
import FavoritesAfter from "@/images/blog/swisscharge/FavouritesRedesign.png";
import FilterAfter from "@/images/blog/swisscharge/MapFilterRedesign.png";

export const pageTitle = "Case Study: Swisscharge iOS App";

export const Topics = [
  "Market and User Research",
  "Heuristic Evaluation",
  "User Interface Design",
  "Prototyping",
];

export const comparisons = [
  {
    title: "Map with available charging stations in the area",
    beforeImage: {
      src: MapNavigationBefore,
      alt: "Original map and navigation interface showing cluttered design",
    },
    afterImage: {
      src: MapNavigationAfter,
      alt: "Redesigned map and navigation interface with improved clarity",
    },
    beforeObservations: [
      {
        title: "The symbols and their perceived effect",
        text: "The main navigation uses filled icons for the active state. Based on this logic, the filter icon signals that one or more filters are active, which is not the case.",
      },
      {
        title: "No fuzzy search",
        text: "Fuzzy searches are not possible, so nothing is found with the search term 'Sursee'; only 'Sursee, Switzerland' works. Alternatively, you have to select manually from the list.",
      },
      {
        title: "The help menu",
        text: "The 'Help' section is offered directly on the map level. Few people will probably need help navigating the map, but context-sensitive help will likely be more appropriate later on.",
      },
      {
        title: "The Scan QR menu",
        text: "Does not deserve its own section. Comparable apps have placed this action directly on the map as a button.",
      },
    ],
    afterObservations: [
      {
        title: "iOS26 Liquid Glass",
        text: "The interface now follows Apple's UI guidelines and the icons are from the same set.",
      },
      {
        title: "The menu structure",
        text: "Instead of 'Help,' you now have the option to go directly to your own profile.",
      },
      {
        title: "Scan QR code",
        text: "Now located directly on the map as a shortcut.",
      },
    ],
  },
  {
    title: "Filtering for a suitable charging station",
    beforeImage: {
      src: FilterBefore,
      alt: "Original favorites management with limited organization options",
    },
    afterImage: {
      src: FilterAfter,
      alt: "Redesigned favorites management with drag-and-drop and categories",
    },
    beforeObservations: [
      {
        title: "The plugs",
        text: "There are too many plugs available as filters, which means they take up too much space. For example, 'NEMA' is not used in Switzerland and 'Induction' is not yet relevant.",
      },
      {
        title: "Order of filter options",
        text: "Options such as minimum power, AC/DC, and availability filter at a higher level than the plugs. Accordingly, these options should appear first.",
      },
      {
        title: "Native elements",
        text: "An iOS26 sheet (UI element that appears from the bottom of the screen) is more suitable than a menu from the right because it is easier to close.",
      },
      {
        title: "Missing legends",
        text: "Not all users will understand what a roaming station is, so this should be explained clearly.",
      },
    ],
    afterObservations: [
      {
        title: "New filter order",
        text: "The filters are now arranged so that those that have the greatest influence on the stations to be displayed are shown at the top. First is the charging power, followed by availability and conditions, and finally the individual plugs, with Type 2 and CCS already covering the majority of all stations today.",
      },
      {
        title: "Charging power",
        text: "Four predefined options make selection easier.",
      },
      {
        title: "Legends",
        text: "Many filter options now have a short explanatory text, so it is now clear what exactly the corresponding option does.",
      },
    ],
  },
  {
    title: "The details of the selected Charging Location",
    beforeImage: {
      src: ChargingStationBefore,
      alt: "Original charging station detail view with inconsistent design",
    },
    afterImage: {
      src: ChargingStationAfter,
      alt: "Redesigned charging station detail view with improved information hierarchy",
    },
    beforeObservations: [
      {
        title: "Language consistency",
        text: "There is English text in the German interface, which is not only very small, but also probably irrelevant or not yet relevant. For example, I don't see a price, but I do see the contract used to bill my charge.",
      },
      {
        title: "Icon size",
        text: "The icon and its container take up an enormous amount of space. In Switzerland, Type 2 and CSS are almost the only relevant connections for charging electric cars, so the icon does not need to be given such prominence here.",
      },
      {
        title: "Link consistency",
        text: "'Start navigation' and 'Display' are both links, but they look different.",
      },
      {
        title: "Labeling",
        text: "The label of the 'Display' link is very superficial. What should be displayed here? Ideally, the link should clearly communicate where it leads, e.g., 'Charging point details' or 'Continue to charging.'",
      },
      {
        title: "Visual priority",
        text: "The navigation icon is green, but unlike the availability indicator, it is not nearly as important, yet it competes with it visually.",
      },
      {
        title: "Station ID",
        text: "The station ID is extremely small, but it can often be useful for confirming that you are at the correct charging station.",
      },
      {
        title: "Color meaning",
        text: "The 'Occupied' color is similar to orange, but should be clearly distinguishable from it visually, as it symbolizes a warning.",
      },
      {
        title: "Redundant actions",
        text: "'Scan QR code' is already found in the main navigation, and if I am already on this detail view, I have already found the correct station and no longer need to scan a code.",
      },
    ],
    afterObservations: [
      {
        title: "Availability indicators",
        text: "As a user, I must be able to assume that a station is always available. This means that my design only marks exceptions with red text, which also helps to calm the interface somewhat and keep the number of colors in the interface low.",
      },
      {
        title: "Contact accessibility",
        text: "The phone number cannot be called directly, so the user has to remember the number and enter it manually on their cell phone!",
      },
      {
        title: "Information hierarchy",
        text: "The price appears visually almost the same size as the station ID. Just before starting a charging process, I would argue that this information is extremely important and deserves a corresponding place in the hierarchy.",
      },
      {
        title: "Call to action",
        text: "As a link, 'Change' competes with the main call to action and should be less visually prominent.",
      },
      {
        title: "Units of time",
        text: "'Duration of free time' is given in minutes. But for us humans, hours are easier to understand.",
      },
      {
        title: "Price clarity",
        text: "It is not entirely clear that the 'price per 1 min' only starts after the free time. It could be a different charge; in electric mobility, blocking charges or overload charges are already a reality.",
      },
    ],
  },
  {
    subtitle: "placeholder subtitle",
    title: "Starting a charging session",
    beforeImage: {
      src: StartChargingBefore,
      alt: "Original charging session start interface with unclear process",
    },
    afterImage: {
      src: StartChargingAfter,
      alt: "Redesigned charging session start interface with streamlined flow",
    },
    beforeObservations: [
      {
        title: "Phone functionality",
        text: "The phone number cannot be called directly, so the user has to remember the number and enter it manually on their cell phone!",
      },
      {
        title: "Price prominence",
        text: "The price appears visually almost the same size as the station ID. Just before starting a charging process, I would argue that this information is extremely important and deserves a corresponding place in the hierarchy.",
      },
      {
        title: "Button hierarchy",
        text: "As a link, 'Change' competes with the main call to action and should be less visually prominent.",
      },
      {
        title: "Time formatting",
        text: "The 'duration of the free period' is given in minutes. However, hours are easier for us humans to understand.",
      },
      {
        title: "Fee transparency",
        text: "It is not entirely clear that the 'price per 1 min' only starts after the free period.",
      },
    ],
    afterObservations: [
      {
        title: "Visual hierarchy",
        text: "The content is now clearly structured according to location, support, fees, and payment.",
      },
      {
        title: "Charging prices",
        text: "The price for charging is clearly visible, and it is now clear when and at what price blocking fees will be charged.",
      },
      {
        title: "Accessible Links",
        text: "One click on the link directly initiates a call. In addition, office hours are now clearly displayed.",
      },
      {
        title: "Call to Action",
        text: "The main action—starting a charging process—is now more prominent than changing the payment option.",
      },
    ],
  },
  {
    title: "Receipts of past charging sessions",
    beforeImage: {
      src: ReceiptsBefore,
      alt: "Original receipts overview with poor organization",
    },
    afterImage: {
      src: ReceiptsAfter,
      alt: "Redesigned receipts overview with improved filtering and clarity",
    },
    beforeObservations: [
      {
        title: "Empty states",
        text: "If no results are available for the current period, an automatic switch to 'Duration: All' can prevent the screen from remaining empty.",
      },
      {
        title: "Repetition",
        text: "Main title is repeated twice and therefore has limited value.",
      },
      {
        title: "Date formatting",
        text: "The date and time looks like they were taken directly from the database. However, humans prefer a more readable format such as July 26, 2024, 12:27 PM.",
      },
      {
        title: "Icon consistency",
        text: "Various arrows in different sizes and thicknesses are used, such as the normal arrow and the chevron arrow.",
      },
      {
        title: "Lack of main action",
        text: "It is not immediately obvious where to tap on this screen, as there is no obvious primary action.",
      },
    ],
    afterObservations: [
      {
        title: "Filter by date",
        text: "The Switch UI is easier to use than the dropdown and all options are immediately visible.",
      },
      {
        title: "Improved overview",
        text: "Whereas previously only two past sessions were visible on my screen, thanks to a space-saving measure, four are now visible.",
      },
      {
        title: "Charging statistics",
        text: "By removing the decimal places for the kWh charged and arranging the symbols vertically, we gain more space for the charging processes below.",
      },
      {
        title: "Obvious main actions",
        text: "Filtering by date or downloading receipts are the most important actions that can be performed on this screen.",
      },
    ],
  },
  {
    title: "View Favorites of Charging stations",
    beforeImage: {
      src: FavoritesBefore,
      alt: "Original favorites management with limited organization options",
    },
    afterImage: {
      src: FavoritesAfter,
      alt: "Redesigned favorites management with drag-and-drop and categories",
    },
    beforeObservations: [
      {
        title: "Visual hierarchy",
        text: "It is difficult to see which of the stored charging points belong together as a unit.",
      },
      {
        title: "Information density",
        text: "With a large number of favorites, you have to scroll vertically a lot, as individual charging stations take up a lot of space.",
      },
      {
        title: "Management",
        text: "To remove an entry, I first have to navigate to the corresponding charging point on the map.",
      },
      {
        title: "Missing pricing information",
        text: "Price information missing. This information should be included in a charging station that has been manually defined as a favorite.",
      },
      {
        title: "Missing filters",
        text: "The list can become very long if you have many favorites. One possible solution is to use a filter for loading capacity, distance, or provider.",
      },
    ],
    afterObservations: [
      {
        title: "Improved visual hierarchy",
        text: "The preferred charging stations are now clearly separated from each other visually.",
      },
      {
        title: "Improved overview",
        text: "Whereas previously only two preferred charging stations were displayed on my screen, four are now visible due to a space-saving measure.",
      },
      {
        title: "Clear main actions",
        text: "Navigating to the desired charging station and removing the station from the favorites list are now the clear main actions on this screen.",
      },
    ],
  },
];
