"use strict"

class Team {
    async getTeam() {
        try {
            const response = await fetch("/data/team-data/team-data.json")
            const members = await response.json()
            return members
        }
        catch (error) {
            console.error(error)
        }
    }

    displayTeam(members) {
        const container = document.querySelector(".team__container")
        members.forEach(member => {
            if (container) {
                container.insertAdjacentHTML("beforeend", `
                    <div class="team__card">
                        <div class="team__card-bcg">
                            <img src="/app/images/bg-image.jpg" alt="">
                        </div>
                        <div class="team__member-pic">
                            <img src="${member.image}" alt="member">
                        </div>
                        <div class="team__memeber-info">
                            <h4 class="team__member-name">${member.name}</h4>
                            <span>${member.title}</span>
                            <p>${member.story}</p>
                            <ul class="team__social">
                                <li>
                                    <a href="${member.faceUrl}" target="_blank">
                                        <img src="${member.faceIcon}" alt="" width="25px" height="25px">
                                    </a>
                                </li>
                                <li>
                                    <a href="${member.twitterUrl}" target="_blank">
                                        <img src="${member.twitterIcon}" alt="" width="25px" height="25px">
                                    </a>
                                </li>
                                <li>
                                    <a href="${member.instaUrl}" target="_blank">
                                        <img src="${member.instaIcon}" alt="" width="25px" height="25px">
                                    </a>
                                </li>
                                <li>
                                    <a href="${member.githubUrl}" target="_blank">
                                        <img src="${member.githubIcon}" alt="" width="25px" height="25px">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                `)
            }
        })
    }
};

(async () => {
    const team = new Team()
    const members = await team.getTeam()
    team.displayTeam(members)
})();