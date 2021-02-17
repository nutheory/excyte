# Excyte

## Live Test Data
dataset_id: actris_ref
export BRIDGE_SERVER_KEY=c72f9c07c32759011128b84001acb35d

## IP Proxy Test
$ iex -S mix
page = Crawly.fetch("https://whatismyipaddress.com/")
{:ok, doc} = Floki.parse_document(page.body)
result = Floki.text(Floki.find(doc, "#ipv4 a"))

## Deploy instructions
https://www.youtube.com/watch?v=DhSylrNr81k


To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `npm install` inside the `assets` directory
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix

http://localhost:4000/insights/cma/review/cma11612571868