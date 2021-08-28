const server = 'http://localhost:50700';

export default async function loadContract() {
  const response = await fetch(`${server}/contracts`);
  const responseContrats = await response.json();
  const container = document.getElementById("container");
  for (let i = 0; i < responseContrats.length; i++) {
    container.innerHTML += `
      <div class="existing-contract">
        <ul className="fields">
          <li>
            <div> Arbiter </div>
            <div> ${responseContrats[i].arbiter} </div>
          </li>
          <li>
            <div> Beneficiary </div>
            <div> ${responseContrats[i].beneficiary} </div>
          </li>
          <li>
            <div> Value </div>
            <div> ${responseContrats[i].value} ETH </div>
          </li>
        </ul>
      </div>
    `;
  }
}
