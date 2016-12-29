const presidents = [
  {
    'id': 'george-washington',
    'title': '1st President of the United States',
    'name': 'George Washington',
    'birth': 'February 22, 1732',
    'image': 'georgewashington.jpg',
    'cover': 'georgewashingtoncover.jpg',
    'link': 'https://en.wikipedia.org/wiki/George_Washington',
    'office': 'April 30, 1789 - March 3, 1797',
    'nickname': 'Father of His Country',
    'died': 'December 14, 1799',
    'father': 'Augustine Washington',
    'mother': 'Mary Ball Washington',
    'wife': 'Martha Dandridge Cutis',
    'children': 'John "Jack" Parke Custis (adopted), Martha "Patsy" Cutis (adopted)',
    'religion': 'Episcopalian',
    'education': 'No formal education',
    'occupation': 'Planter, Soldier',
    'political-party': 'No formal political party affiliation.',
    'vice-president': 'John Adams',
    'events': [
      { 'year': '1789', 'event': 'The Judiciary Act specified the number of Federal courts and judges.'},
      { 'year': '1790', 'event': 'Supreme Court met for the first time with John Jay as the Chief Justice.' },
      { 'year': '1791', 'event': 'Federal capital established in swamplands on the Potomac.' },
      { 'year': '1792', 'event': 'Post Office established by Congress as a separate entity.' },
      { 'year': '1793', 'event': 'War breaks out between Britain and France. On April 22, U.S. declares neutrality.' },
      { 'year': '1794', 'event': 'Whiskey Rebellion over excise tax in western Pennsylvania. Federal troops called to suppress the armed rebellion.' },
      { 'year': '1795', 'event': 'Pinckney\'s Treaty with Spain opened navigation on Mississippi River.' },
      { 'year': '1796', 'event': 'Washington delivered his Farewell Address.' },
    ],
  },
  {
    'id': 'john-adams',
    'title': '2st President of the United States',
    'name': 'John Adams',
    'partysymbol': 'federalist.png',
    'birth': 'October 30, 1735',
    'image': 'johnadams.jpg',
    'cover': 'johnadamscover.jpg',
    'link': 'https://en.wikipedia.org/wiki/John_Adams',
    'office': 'March 4, 1797 - March 3, 1801',
    'nickname': 'Atlas of independence',
    'died': 'July 4, 1826',
    'father': 'John Adams',
    'mother': ':Susanna Boylston Adams',
    'wife': 'Abigail Smith',
    'children': 'Abigail Amelia Adams, John Quincy Adams, Susanna Adams, Charles Adams, Thomas Boylston Adams',
    'religion': 'Unitarian',
    'education': 'Graduated from Harvard College',
    'occupation': 'Lawyer',
    'political-party': 'Federalist',
    'vice-president': 'Thomas Jefferson',
    'events': [
      { 'year': '1796', 'event': 'E Pluribus Unum: "Out of Many, One"; added to American coins.'},
      { 'year': '1797', 'event': 'Three anonymous French trouble makers brought France and the U.S. to the brink of war in what became known as the XYZ Affair.' },
      { 'year': '1798', 'event': 'Federalists support the highly unpopular Alien and Sedition Acts. They would later be repealed.' },
      { 'year': '1800', 'event': 'U.S. capital relocated to Washington, D.C. from Philadelphia.' },
    ],
  },
  {
    'id': 'thomas-jefferson',
    'title': '3rd President of the United States',
    'name': 'Thomas Jefferson',
    'partysymbol': 'democraticrepublican.png',
    'birth': 'April 13, 1743',
    'image': 'thomasjefferson.jpg',
    'cover': 'thomasjeffersoncover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Thomas_Jefferson',
    'office': 'March 4, 1801 - March 3, 1809',
    'nickname': '"Man of the People"',
    'died': ' July 4, 1826',
    'father': 'Peter Jefferson',
    'mother': 'Jane Randolph Jefferson',
    'wife': 'Martha Wayles Skelton',
    'children': 'Martha Washington Jefferson, Jane Randolph Jefferson, infant son, Mary Jefferson, Lucy Elizabeth Jefferson, Lucy Elizabeth Jefferson',
    'religion': 'No formal affiliation',
    'education': 'Graduated from College of William and Mary',
    'occupation': 'Lawyer, planter',
    'political-party': 'Democratic-Republican',
    'vice-president': 'Aaron Burr, George Clinton',
    'events': [
      { 'year': '1803', 'event': 'Supreme Court ruled in Marbury v. Madison . Any law passed by Congress can be declared unconstitutional by the courts.'},
      { 'year': '1804', 'event': '12th Amendment changed Presidential election rules.' },
      { 'year': '1807', 'event': 'Congress outlaws importing slaves from Africa, March 2.' },
      { 'year': '1808', 'event': 'Slave importation outlawed. Yet, another 1/4 million brought in by 1860.' },
      { 'year': '1809', 'event': 'Non-Intercourse Act, March 1, repeals the Embargo Act, which didn\'t work.' },
    ],
  },
  {
    'id': 'james-madison',
    'title': '4th President of the United States',
    'name': 'James Madison',
    'partysymbol': 'democraticrepublican.png',
    'birth': 'March 16, 1751',
    'image': 'jamesmadison.jpg',
    'cover': 'jamesmadisoncover.jpg',
    'link': 'https://en.wikipedia.org/wiki/James_Madison',
    'office': 'March 4, 1809 to March 3, 1817',
    'nickname': 'Father of the Constitution',
    'died': 'June 28, 1836',
    'father': 'James Madison',
    'mother': 'Nelly Conway Madison',
    'wife': 'Dolley Payne Todd',
    'children': 'None',
    'religion': 'Episcopalian',
    'education': 'Graduated from College of New Jersey (now Princeton University)',
    'occupation': 'Lawyer',
    'political-party': 'Democratic-Republican',
    'vice-president': 'George Clinton, Elbridge Gerry',
    'events': [
      { 'year': '1811', 'event': 'Madison allows 20-year charter of Bank of the United States to lapse.'},
      { 'year': '1812', 'event': 'War declared on England on June 18 after England continued to attack U.S. ships headed to France.' },
      { 'year': '1814', 'event': 'City of Washington captured and burned by British, August 24.' },
      { 'year': '1815', 'event': 'Andrew Jackson defeated British at New Orleans January 8, after war ended.' },
      { 'year': '1816', 'event': 'Second Bank of the United States chartered, April 10.' },
    ],
  },
  {
    'id': 'james-monroe',
    'title': '5st President of the United States',
    'name': 'James Monroe',
    'birth': 'April 28, 1758',
    'image': 'jamesmonroe.gif',
    'partysymbol': 'democraticrepublican.png',
    'cover': 'jamesmonroecover.jpg',
    'link': 'https://en.wikipedia.org/wiki/James_Monroe',
    'office': 'March 4, 1817 - March 3, 1825',
    'nickname': 'Era-of-Good-Feeling President',
    'died': 'July 4, 1831',
    'father': 'Spence Monroe',
    'mother': 'Elizabeth "Eliza" Kortright',
    'wife': 'Martha Dandridge Cutis',
    'children': 'Eliza Kortright Monroe, James Spence Monroe, Maria Hester Monroe',
    'religion': 'Episcopalian',
    'education': 'Graduated from College of William and Mary',
    'occupation': 'Lawyer',
    'political-party': 'Democratic-Republican',
    'vice-president': 'Daniel D. Tompkins',
    'events': [
      { 'year': '1818', 'event': 'Congress fixed the number of stripes on the U.S. flag at 13 to honor the original colonies, April 4. Anglo-American Conventionset the 49th parallel as the border with Canada.'},
      { 'year': '1819', 'event': 'Florida ceded by Spain to the United States on February 22. In exchange the U.S. cancelled $5 million in Spanish debts.' },
      { 'year': '1820', 'event': 'The Missouri Compromise, forbade slavery above 36 degrees 30 minutes latitude. Monroe reelected.' },
      { 'year': '1823', 'event': 'On December 2, Monroe Doctrine delivered to Congress.' },
    ],
  },
  {
    'id': 'john-quincy-adams',
    'title': '6th President of the United States',
    'name': 'John Quincy Adams',
    'partysymbol': 'democraticrepublican.png',
    'birth': 'July 11, 1767',
    'image': 'johnquincyadams.jpg',
    'cover': 'johnquincyadamscover.jpeg',
    'link': 'https://en.wikipedia.org/wiki/John_Quincy_Adam',
    'office': 'March 4, 1825 to March 3, 1829',
    'nickname': 'Old Man Eloquent',
    'died': 'February 23, 1848',
    'father': 'John Adams',
    'mother': 'Abigail Smith Adams',
    'wife': 'Louisa Catherine Johnson',
    'children': 'George Washington Adams, John Adams, Charles Francis Adams, Louisa Catherine Adams',
    'religion': 'Unitarian',
    'education': 'Graduated from Harvard College',
    'occupation': 'Lawyer',
    'political-party': 'Democratic-Republican',
    'vice-president': 'John C. Calhoun',
    'events': [
      { 'year': '1825', 'event': 'The appointment of Henry Clay as secretary of state, led to charges that the Clay and Adams made a bargain in the election of 1824.'},
      { 'year': '1825', 'event': 'Erie Canal completed.' },
      { 'year': '1828', 'event': 'Baltimore & Ohio railroad, the first designed for passengers and freight.' },
      { 'year': '1828', 'event': 'Andrew Jackson defeated Adams.' },
    ],
  },
  {
    'id': 'andrew-jackson',
    'title': '7th President of the United States',
    'name': 'Andrew Jackson',
    'birth': 'March 15, 1767',
    'partysymbol': 'democratic.png',
    'image': 'andrewjackson.jpg',
    'cover': 'andrewjacksoncover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Andrew_Jackson',
    'office': 'April 30, 1789 - March 3, 1797',
    'nickname': 'Father of His Country',
    'died': 'June 8, 1845',
    'father': 'Andrew Jackson',
    'mother': 'Elizabeth Hutchinson Jackson',
    'wife': 'Rachel Donelson Robards (1767-1828)',
    'children': 'Andrew Jackson, Jr. (adopted)',
    'religion': 'Presbyterian',
    'education': 'No formal education',
    'occupation': 'Lawyer, soldier',
    'political-party': 'Democrat',
    'vice-president': 'John C. Calhoun',
    'events': [
      { 'year': '1829', 'event': 'Estate of James Smithson funded the establishment of the Smithsonian.'},
      { 'year': '1830', 'event': 'Jackson authorizes Indian Removal Act of 1830.' },
      { 'year': '1831', 'event': 'Samuel F. Smith wrote "My Country, \'tis of Thee.' },
      { 'year': '1832', 'event': 'Jackson vetoed the rechartering of 2nd Bank leading to the creation of the Whig Party.' },
      { 'year': '1835', 'event': 'U.S. became debt free (briefly) for the only time in history.' },
      { 'year': '1836', 'event': '6000 Mexicans defeated 190 Americans in 12 days at the Alamo on March 6.' },
      { 'year': '1835', 'event': 'Jackson signs Treaty of New Echota with unrecognized leaders of Cherokee Nation, which allows him to force the Cherokees to move to land in what is now Oklahoma. 4,000 Native Americans die on this journey, also known as the Trail of Tears.' },
    ],
  }
];

export default presidents;