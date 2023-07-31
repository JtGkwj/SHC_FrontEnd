<template>
    <v-layout>
        <v-app-bar theme="light">
            <div style="margin-left: 50px">
                <img height="40px" width="auto"
                    src="https://marinerinnovations.com/wp-content/uploads/2023/01/Mariner20-600.png">
            </div>

            <div style="padding-left: 550px; padding-right: 388px;">
                <h2>Health Check</h2>
            </div>

            <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                    <v-btn stacked v-bind="props">
                        <v-badge color="error" dot>
                            <v-icon icon="mdi-bell"></v-icon>
                        </v-badge>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-list-item-title v-text="'No New Surveys!'"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-menu transition="slide-y-transition">
                <template v-slot:activator="{ props }">
                    <v-btn stacked v-bind="props" title="Company Name">

                        <div>
                            <v-icon icon="mdi-account-circle"></v-icon>
                        Company Name
                        </div>
                        
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-list-item-title icon="mdi/settings" v-text="'Account Settings'">
                        </v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-title icon="mdi/settings" v-text="'Logout'">
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <!-- <v-btn stacked>
                <v-icon icon="mdi-account-circle"></v-icon>
            </v-btn> -->
        </v-app-bar>

        <v-navigation-drawer theme="dark" permanent>
            <v-list nav>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
                <v-list-item prepend-icon="mdi-account-question" title="Surveys" value="surveys"></v-list-item>
                <v-list-item prepend-icon="mdi-poll" title="Insights" value="insights"></v-list-item>
            </v-list>

            <!-- <template v-slot:append>
            <div class="pa-2">
              <v-btn block>
                Logout
              </v-btn>
            </div>
          </template> -->
        </v-navigation-drawer>

        <v-main style="min-height: 300px;"></v-main>
    </v-layout>
</template>
