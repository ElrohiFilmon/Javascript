


function dis(val)
{
	document.getElementById('answer').innerHTML += val;
}



function reset()
{
        document.getElementById('answer').innerHTML = ""
}

function del(valr)
{
	document.getElementById('answer').innerHTML -= valr
}

function result()
{
	let convert = document.getElementById('answer').innerHTML
	let resultFinal = math.evaluate(convert)
	document.getElementById('answer').innerHTML = resultFinal

}



