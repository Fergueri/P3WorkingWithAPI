async function goldGraphs() {
fetch('https://fergueri.github.io/LeagueAPI/gold.json').then((response) => response.json()).then((data) => { // Sort champions by pick rate
        data.champions.sort((a, b) => parseFloat(b["PICK-RATE"].replace("%", "")) - parseFloat(a["PICK-RATE"].replace("%", "")));
        const colors = [
            "rgba(159, 128, 45, 1)",
            "rgba(171, 140, 53, 1)",
            "rgba(182, 151, 61, 1)",
            "rgba(204, 174, 77, 1)",
            "rgba(227, 197, 93, 1)",
            "rgba(238, 208, 101, 1)",
            "rgba(249, 219, 109, 1)",
        ];
        // Get top 15 champions
        const topChampions = data.champions.slice(0, 15);

        const championNames = topChampions.map((champion) => champion.NAME);
        const pickRates = topChampions.map((champion) => parseFloat(champion["PICK-RATE"].replace("%", "")));
        const maxY = Math.ceil(Math.max(... pickRates) / 10) * 10;

        const backgroundColors = pickRates.map((pickRate) => {
            const index = Math.round((pickRate / maxY) * (colors.length - .25));
            return colors[index];
        });

        // Get the canvas element and create a Chart.js instance
        const ctx = document.getElementById("championPickR2").getContext("2d");
        const chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: championNames,
                datasets: [
                    {
                        label: "Pick Rate",
                        data: pickRates,
                        backgroundColor: backgroundColors,
                        borderColor: backgroundColors,
                        borderWidth: 1
                    },
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Current Popular Champions",
                        font: {
                            size: 30
                        },
                        color: "rgba(244, 237, 237,1)"
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        position: "bottom",

                        grid: {
                            borderWidth: 1,
                            color: "rgba(244, 237, 237,1)",
                            drawBorder: true,
                            drawOnChartArea: true,
                            drawTicks: true
                        },
                        title: {
                            display: true,
                            text: "Champion Name",
                            color: "rgba(244, 237, 237,1)",
                            font: {
                                size: 15
                            }
                        },
                        beginAtZero: true,
                        ticks: {
                            color: "rgba(244, 237, 237,1)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: maxY,
                        grid: {
                            lineWidth: 1,
                            borderWidth: 1,
                            color: "rgba(244, 237, 237,1)",
                            drawBorder: true,
                            drawOnChartArea: false,
                            drawTicks: true
                        },
                        title: {
                            display: true,
                            text: "Pick Rate (%)",
                            color: "rgba(244, 237, 237,1)",
                            font: {
                                size: 15
                            }
                        },
                        ticks: {
                            color: "rgba(244, 237, 237,1)",
                            callback: function (value) {
                                return value + "%";
                            }
                        }
                    }
                }, // <-- add this closing parenthesis
            }
        })
    }).catch((error) => {
        console.error("Error fetching data:", error);
    });

    fetch('https://fergueri.github.io/LeagueAPI/gold.json').then((response) => response.json()).then((data) => { // Sort champions by pick rate
        data.champions.sort((a, b) => parseFloat(b["WIN-RATE"].replace("%", "")) - parseFloat(a["WIN-RATE"].replace("%", "")));
        const colors = [
            "rgba(78, 158, 44, 1)",
            "rgba(82, 170, 57, 1)",
            "rgba(86, 181, 70, 1)",
            "rgba(86, 181, 70, 1)",
            "rgba(102, 227, 122, 1)",
            "rgba(106, 239, 135, 1)",
            "rgba(110, 250, 147, 1)",
        ];
        // Get top 15 champions
        const topChampions = data.champions.slice(0, 15);

        const championNames2 = topChampions.map((champion) => champion.NAME);
        const winRates = topChampions.map((champion) => parseFloat(champion["WIN-RATE"].replace("%", "")));
        const maxY = Math.ceil(Math.max(... winRates) / 10) * 10;

        const backgroundColors = winRates.map((winRate) => {
            const index = Math.round((winRate / maxY) * (colors.length - 5));
            return colors[index];
        });

        // Get the canvas element and create a Chart.js instance
        const ctx = document.getElementById("championWinR2").getContext("2d");
        const chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: championNames2,
                datasets: [
                    {
                        label: "Win Rates",
                        data: winRates,
                        backgroundColor: backgroundColors,
                        borderColor: backgroundColors,
                        borderWidth: 1
                    },
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Current Champions with Highest Win Rates",
                        font: {
                            size: 30
                        },
                        color: "rgba(244, 237, 237,1)"
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        position: "bottom",

                        grid: {
                            borderWidth: 1,
                            color: "rgba(244, 237, 237,1)",
                            drawBorder: true,
                            drawOnChartArea: true,
                            drawTicks: true
                        },
                        title: {
                            display: true,
                            text: "Champion Name",
                            color: "rgba(244, 237, 237,1)",
                            font: {
                                size: 15
                            }
                        },
                        beginAtZero: true,
                        ticks: {
                            color: "rgba(244, 237, 237,1)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: maxY,
                        grid: {
                            lineWidth: 1,
                            borderWidth: 1,
                            color: "rgba(244, 237, 237,1)",
                            drawBorder: true,
                            drawOnChartArea: false,
                            drawTicks: true
                        },
                        title: {
                            display: true,
                            text: "Win Rate (%)",
                            color: "rgba(244, 237, 237,1)",
                            font: {
                                size: 15
                            }
                        },
                        ticks: {
                            color: "rgba(244, 237, 237,1)",
                            callback: function (value) {
                                return value + "%";
                            }
                        }
                    }
                }, // <-- add this closing parenthesis
            }
        })
    }).catch((error) => {
        console.error("Error fetching data:", error);
    });

    fetch('https://fergueri.github.io/LeagueAPI/gold.json').then((response) => response.json()).then((data) => { // Sort champions by pick rate
        data.champions.sort((a, b) => parseFloat(b["BAN-RATE"].replace("%", "")) - parseFloat(a["BAN-RATE"].replace("%", "")));
        const colors = [
            "rgba(158, 44, 44, 1)",
            "rgba(170, 53, 53, 1)",
            "rgba(181, 61, 61, 1)",
            "rgba(204, 77, 77, 1)",
            "rgba(227, 94, 94, 1)",
            "rgba(239, 102, 102, 1)",
            "rgba(250, 110, 110, 1)",
        ];
        // Get top 15 champions
        const topChampions3 = data.champions.slice(0, 15);

        const championNames3 = topChampions3.map((champion) => champion.NAME);
        const banRates = topChampions3.map((champion) => parseFloat(champion["BAN-RATE"].replace("%", "")));
        const maxY = Math.ceil(Math.max(... banRates) / 10) * 10;

        const backgroundColors = banRates.map((banRate) => {
            const index = Math.round((banRate / maxY) * (colors.length - .25));
            return colors[index];
        });

        // Get the canvas element and create a Chart.js instance
        const ctx = document.getElementById("championBanR2").getContext("2d");
        const chart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: championNames3,
                datasets: [
                    {
                        label: "Ban Rate",
                        data: banRates,
                        backgroundColor: backgroundColors,
                        borderColor: backgroundColors,
                        borderWidth: 1
                    },
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: "Current Most Banned Champions",
                        font: {
                            size: 30
                        },
                        color: "rgba(244, 237, 237,1)"
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        position: "bottom",

                        grid: {
                            borderWidth: 1,
                            color: "rgba(244, 237, 237,1)",
                            drawBorder: true,
                            drawOnChartArea: true,
                            drawTicks: true
                        },
                        title: {
                            display: true,
                            text: "Champion Name",
                            color: "rgba(244, 237, 237,1)",
                            font: {
                                size: 15
                            }
                        },
                        beginAtZero: true,
                        ticks: {
                            color: "rgba(244, 237, 237,1)"
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: maxY,
                        grid: {
                            lineWidth: 1,
                            borderWidth: 1,
                            color: "rgba(244, 237, 237,1)",
                            drawBorder: true,
                            drawOnChartArea: false,
                            drawTicks: true
                        },
                        title: {
                            display: true,
                            text: "Ban Rate (%)",
                            color: "rgba(244, 237, 237,1)",
                            font: {
                                size: 15
                            }
                        },
                        ticks: {
                            color: "rgba(244, 237, 237,1)",
                            callback: function (value) {
                                return value + "%";
                            }
                        }
                    }
                }, // <-- add this closing parenthesis
            }
        })
    }).catch((error) => {
        console.error("Error fetching data:", error);
    });
}
