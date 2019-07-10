Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :songs
  get '/callback', to: 'songs#refresh'
  get '/controller/show/:input', to: 'application#show'
end
