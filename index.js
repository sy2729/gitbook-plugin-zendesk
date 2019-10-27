module.exports = {
	hooks: {
		"page:before": function(page) {
				// page.content += '\n\n<div class="zendesk"></div>\n\n';
				// return page;

				var config = this.options.pluginsConfig.zendesk;
				let {key} = config;
				if(!key) {throw new Error('zendesk key must be specified!!!')}

				let zendeskString = "<script  id='ze-snippet'  src='https://static.zdassets.com/ekr/snippet.js?key=" + key + "'> </script>";
				page.content = page.content + zendeskString
				return page;
		}
	}
};