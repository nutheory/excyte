# Excyte

## Live Test Data

dataset_id: actris_ref
export BRIDGE_SERVER_KEY=c72f9c07c32759011128b84001acb35d

## Lexicon

Insight
: Holds all foreign data in a fixed state and links agent, brokerage, and subject  

Document Template
: Initial settings and structure for overall document, including colors, fonts, and schema. This info should be saved to the insight itself 

Section Template
: Prosemirror json structure of data to be used in the editor. This needs to save names of Tiptap extensions for dynamic loading.

Section
: End Product with its position and parent Insight saved as HTML for Display or Editing.  

## Deploy instructions

[https://www.youtube.com/watch?v=DhSylrNr81k](Render deploy)

Migrate cmd $ _build/prod/rel/excyte/bin/excyte eval "Excyte.Release.migrate"

To start your Phoenix server:

* Install dependencies with `mix deps.get`
* Create and migrate your database with `mix ecto.setup`
* Install Node.js dependencies with `npm install` inside the `assets` directory
* Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Links

[https://heroicons.com](Hero Icons)

[https://remixicon.com](Remix Icons)

[https://next.tiptap.dev/](TipTap 2)

[https://bridgedataoutput.com/](Bridge RESO)

[https://prosemirror.net/docs](Prosemirror)

[https://rapidapi.com/apidojo/api/realtor](Realtor API)
