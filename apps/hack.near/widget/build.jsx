const accountId = props.accountId ?? context.accountId; const ownerId = props.ownerId ?? "hack.near"; const pageId = props.pageId ?? "community.page"; return <Widget src="hack.near/widget/community.page" props={{ accountId, communityId: "devs.near", contractId: "", h1: "Build",
        h2: "", tagline: "let's build", mainColor: "", buttonText: "start", link: "https://nearbuilders.org" }} />