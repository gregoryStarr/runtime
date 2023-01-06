allItems = []
document.querySelectorAll("#items > div.virtualtable.virtualtable-body > table > tr > td.virtualtable.virtualtable-cell.virtualtable-column-1 > div > span").forEach( (item)=>  { allItems.push(item.innerHTML) })
JSON.stringify(allItems)