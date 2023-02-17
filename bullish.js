document.getElementById("button1").addEventListener("click", areWeBullish);
            function areWeBullish(){
                            var xhr = new XMLHttpRequest();
                            xhr.open("GET","https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin",true);
                            xhr.onload = function(){
                                            if(xhr.status == 200){
                                                            var result = JSON.parse(xhr.responseText);
                                                            var round = Math.round(result[0].price_change_24h);
                                                            var round_abs = Math.abs(result[0].price_change_24h);
                                                            document.getElementById("current_price").innerHTML = "$" + result[0].current_price;
                                                            if(result[0].price_change_24h > 0){
                                                                            document.getElementById("result").innerHTML = "We are bullish!";
                                                            document.getElementById("price_change").innerHTML = "(+$" + round_abs + ")";
                                                                        } else {
                                                                                        document.getElementById("result").innerHTML = "We are bearish";
                                                            document.getElementById("price_change").innerHTML = "($" + round + ")";
                                                                                    }
                                                        }
                                        }
                            xhr.send();
                        }

