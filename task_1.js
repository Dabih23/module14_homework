const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelectorAll("student");
const resultList = []

listNode.forEach(e => {
    const nameNode = e.querySelector("name");
    const firstNode = e.querySelector("first");
    const secondNode = e.querySelector("second");
    const ageNode = e.querySelector("age");
    const profNode = e.querySelector("prof");

const categoryLang = nameNode.getAttribute("lang");
  
 const result = {
  name: firstNode.textContent + ' ' + secondNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
  lang: categoryLang,
 };
  resultList.push(result)
})



console.log(resultList);