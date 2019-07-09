Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :songs
  get '/callback', to: 'songs#index'
  get '/controller/show?search-input?=:input_self', to: 'songs#show'
end
