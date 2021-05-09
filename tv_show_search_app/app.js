const tbutton = document.querySelector('.tb');
const searchIt = document.querySelector('#tsearch');
const para = document.querySelector('.psearch');
const rightHere = document.querySelector('.here');

const searchShow = async () => {
  const config = { headerss: { Accept: 'application/json' } };
  const res = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${s}`,
    config
  );
  //   console.log(res.data.length);

  for (i = 0; i < res.data.length; i++) {
    // console.log(res.data[i].show.name, ':', res.data[i].show.summary);

    const divBlock = document.createElement('div');
    const heading = document.createElement('h2');
    heading.innerHTML = res.data[i].show.name;
    const pSummary = document.createElement('p');
    pSummary.innerHTML = res.data[i].show.summary;
    divBlock.append(heading);
    divBlock.append(pSummary);
    rightHere.append(divBlock);
    console.log(rightHere);
  }
};

searchIt.addEventListener('change', (e) => {
  s = e.target.value;
});

tbutton.addEventListener('click', (e) => {
  e.preventDefault();
  searchShow();
});
